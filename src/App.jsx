import './App.css'

import WeatherCard from './components/WeatherCard'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import GitHubIcon from '@mui/icons-material/GitHub';
function App() {
  const [search, setSearch] = useState("");
  const cities = [
    { city: 'Riyadh', lat: 24.7136, lon: 46.6753 },
    { city: 'Jeddah', lat: 21.5433, lon: 39.1728 },
    { city: 'Jazan', lat: 16.8892, lon: 42.5511 },
    { city: 'Makkah', lat: 21.3891, lon: 39.8579 },
    { city: 'Madinah', lat: 24.5247, lon: 39.5692 },
    { city: 'Dammam', lat: 26.4207, lon: 50.0888 },
    { city: 'Khobar', lat: 26.2172, lon: 50.1971 },
    { city: 'Dhahran', lat: 26.2886, lon: 50.113 },
    { city: 'Taif', lat: 21.2703, lon: 40.4158 },
  ]
  const { t, i18n } = useTranslation()
  const [locale, setLocale] = useState('en')
  const filteredCities = cities.filter((city) =>
  t(city.city).toLowerCase().includes(search.toLowerCase())
);
  function hanldeLanguageClick() {
    if (locale == 'en') {
      setLocale('ar')
      i18n.changeLanguage('ar')
    } else {
      setLocale('en')
      i18n.changeLanguage('en')
    }
  }
  useEffect(() => {
    i18n.changeLanguage(locale)
  }, [])
  return (
    <div className="App">
      <Container maxWidth="xl">
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            padding: '40px 0',
          }}
        >
       
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              color: 'white',
              mb: 1,
            }}
          >
            🌤️ {t('Saudi Weather Conditions')}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: '#d5d5d5',
            }}
          >
            {t('Live weather for cities')}
          </Typography>

          <Button
            onClick={hanldeLanguageClick}
            style={{ marginTop: '10px' }}
            variant="contained"
          >
            {t('Arabic')}
          </Button>

               
        </div>
        <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    marginBottom: "40px",
    flexWrap: "wrap",
  }}
>
  <TextField
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder={t("Search city")}
    variant="outlined"
    sx={{
      width: "350px",
      "& .MuiOutlinedInput-root": {
        backgroundColor: "#fff",
        borderRadius: "15px",
      },
    }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon color="primary" />
        </InputAdornment>
      ),
    }}
  />

  <Button
    variant="contained"
    sx={{
      height: "56px",
      borderRadius: "15px",
      px: 4,
      fontWeight: "bold",
      textTransform: "none",
    }}
  >
    {t("Search")}
  </Button>
</div>
        {/* Cards */}
        <div  dir={locale == "en" ? "ltr" : "rtl"}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '40px',
            paddingBottom: '40px',
          }}
        >
          {filteredCities.map((city) => (
            <WeatherCard
              key={city.city}
              city={city.city}
              lat={city.lat}
              lon={city.lon}
            />
          ))}
        </div>
      </Container>
      <Typography
        sx={{
          color: 'black',
          textAlign: 'center',
          py: 3,
        }}
      >
        Created by {" "}
        <a
          href="https://github.com/Abdulrahman2127"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#4FC3F7',
            textDecoration: 'none',
            fontWeight: 'bold',
            marginRight: "10px"
          }}
        >
          Abdulrahman2127 
        </a>
        
          <GitHubIcon/>
        
      </Typography>
    </div>
  )
}

export default App
