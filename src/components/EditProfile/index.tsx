import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from '@react-spring/web';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { countryDatas } from '../../data/Shop/Country';
import { toast } from 'react-toastify';
import { CreateOrUpdateUserRequestInterface } from '../../models/user';

interface FadeProps {
  children: React.ReactElement;
  in?: boolean;
  onClick?: any;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onExited?: (node: HTMLElement, isAppearing: boolean) => void;
  ownerState?: any;
}

enum styleEnum {
  ABSOLUTE = 'absolute',
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
  props,
  ref,
) {
  const { children, in: open, onClick, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null as any, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null as any, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

const style = {
  position: 'absolute' as styleEnum.ABSOLUTE,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const EditProfile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    const confirmPassword = data.get('confirm-password') as string;
    const country = data.get('country') as string;
    const avatar = 'https://picsum.photos/200/200'; // TODO: Add choose avatar function

    if (!name || !email || !password || !confirmPassword || !country) {
      toast.error('全部のデータを入力してください！');
      return;
    }

    if (confirmPassword !== password) {
      toast.error('パスワードの確認は間違います！');
      return;
    }

    const updateData: CreateOrUpdateUserRequestInterface = {
      name,
      email,
      password,
      country,
      avatar,
    };
    console.log(updateData);

    // try {
    //   await userApi.createUser(updateData);
    //   toast.success('レジスターできました');
    //   navigate('/login');
    // } catch (error: any) {
    //   toast.error(error.response.data.message);
    // }
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <BorderColorIcon sx={{ fontSize: '32px' }} />
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="spring-modal-title"
              variant="h5"
              component="h2"
              sx={{ textAlign: 'center', fontWeight: 'bold' }}
            >
              編集
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="ユーザー名"
                name="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="メール"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="パスワード"
                type="password"
                id="password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirm-password"
                label="パスワードの確認"
                type="password"
                id="confirm-password"
              />
              <FormControl sx={{ marginTop: '20px', width: '150px' }}>
                <InputLabel id="label-select-coutry">カントリー</InputLabel>
                <Select
                  labelId="select-country"
                  id="select-country"
                  label="country"
                  name="country"
                >
                  {countryDatas.map((country, index) => (
                    <MenuItem value={country} key={index}>
                      {country}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Grid sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    ':hover': {
                      backgroundColor: '#599616',
                    },
                    mt: 3,
                    mb: 2,
                    backgroundColor: '#5ca70a',
                    color: 'black',
                    border: '2px solid black',
                  }}
                >
                  セーブ
                </Button>
                <Button
                  onClick={handleClose}
                  variant="contained"
                  sx={{
                    ':hover': {
                      backgroundColor: '#cfcf47',
                    },
                    mt: 3,
                    mb: 2,
                    backgroundColor: 'yellow',
                    color: 'black',
                    border: '2px solid black',
                  }}
                >
                  クリア
                </Button>
              </Grid>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
