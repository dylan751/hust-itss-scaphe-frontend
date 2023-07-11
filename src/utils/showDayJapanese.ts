export const showDayJapanese = (day: number): string => {
  switch (day) {
    case 2:
      return '月';
    case 3:
      return '火';
    case 4:
      return '水';
    case 5:
      return '木';
    case 6:
      return '金';
    case 7:
      return '土';
    default:
      return '日';
  }
};
