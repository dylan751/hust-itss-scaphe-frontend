/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { format } from 'date-fns';
import { ShopInterface } from '../models/shop';
import { OpenHourInterface } from '../models/openHour';

export const calculateOpenHours = (shopInfo: ShopInterface) => {
  const today = new Date();
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

  const formattedToday = format(new Date(), 'e dd/LL/yyyy HH:mm:ss b');
  const formattedTomorrow = format(tomorrow, 'e dd/LL/yyyy HH:mm:ss b');

  // formattedToday: 2 12/06/2023 12:30:00 PM
  const [currentWeekDay, currentDate, currentTime, currentType] =
    formattedToday.split(' ');
  const [currentHour, currentMinute, currentSecond] = currentTime.split(':');

  const [tomorrowWeekDay, tomorrowDate, tomorrowTime, tomorrowType] =
    formattedTomorrow.split(' ');

  // If currentTime < 8pm (=20), then show today's openHour
  // Else, show next day's openHour
  let dateToShow: OpenHourInterface = {
    day: 2,
    openTime: new Date(),
    closeTime: new Date(),
  };
  if (parseInt(currentHour) >= 20) {
    dateToShow = shopInfo.openHours.find(
      (openHour) => openHour.day === parseInt(currentWeekDay) + 1,
    )!;
  } else {
    dateToShow = shopInfo.openHours.find(
      (openHour) => openHour.day === parseInt(currentWeekDay),
    )!;
  }

  if (dateToShow && dateToShow.openTime) {
    // formattedOpenTime: 2 12/06/2023 12:30:00 PM
    const formattedOpenTime = format(
      new Date(dateToShow.openTime),
      'e dd/LL/yyyy HH:mm:ss b',
    );
    const formattedCloseTime = format(
      new Date(dateToShow.closeTime),
      'e dd/LL/yyyy HH:mm:ss b',
    );
    // openTime: 12:30:00
    const [openWeekDay, openDate, openTime, openType] =
      formattedOpenTime.split(' ');
    const [closeWeekDay, closeDate, closeTime, closeType] =
      formattedCloseTime.split(' ');

    /**
     * openHour: 12
     * openMinute: 30
     * openSecond: 00
     */
    const [openHour, openMinute, openSecond] = openTime.split(':');
    const [closeHour, closeMinute, closeSecond] = closeTime.split(':');
    const date = `${openHour}:${openMinute} ~ ${closeHour}:${closeMinute} ${
      dateToShow.day <= 7 ? `Thứ ${dateToShow.day}` : 'Chủ nhật'
    }, ${parseInt(currentHour) >= 20 ? tomorrowDate : currentDate}`;

    return date;
  }
};
