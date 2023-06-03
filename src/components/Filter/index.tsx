import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Theme,
  Typography,
  useTheme,
} from '@mui/material';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const cityData = ['Hà Nội', 'Thanh Hóa', 'Nam Định', 'Hải Dương', 'Đà Nẵng'];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const Filter = () => {
  const theme = useTheme();

  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <Grid
      sx={{
        color: 'black',
        marginLeft: '20px',
        fontWeight: 800,
        fontSize: '25px',
      }}
    >
      <Container sx={{ maxWidth: '70%'}}>
        <Grid
          sx={{
            margin: '0 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <TextField
            id="search"
            type="search"
            label="Search"
            sx={{ width: '70%', mt: '30px', mr: '20px' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="outlined"
            sx={{ mt: '30px', height: '50px', width: '150px' }}
          >
            ソート:場所別
          </Button>
        </Grid>
        <Grid
          sx={{
            margin: '0 20px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <FormControl sx={{ m: '20px 20px 20px 0', width: 200 }}>
            <InputLabel id="demo-multiple-name-label">City</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {cityData.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ m: '20px 20px 20px 0', width: 200 }}>
            <InputLabel id="demo-multiple-name-label">District</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {cityData.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: '20px 20px 20px 0', width: 200 }}>
            <InputLabel id="demo-multiple-name-label">Japan</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {cityData.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <CalendarMonthSharpIcon
            sx={{ fontSize: '40px', marginLeft: 'auto' }}
          />
        </Grid>
      </Container>
    </Grid>
  );
};

export default Filter;
