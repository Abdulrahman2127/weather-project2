import axios from 'axios'
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";

import Typography from '@mui/material/Typography'
import CloudIcon from '@mui/icons-material/Cloud'


let cancelAxios = null

export default function WeatherCard({ city, lat, lon }) {
  const [dateAndTime, setDateAndTime] = useState('')
  const [temp, setTemp] = useState({
    number: null,
    description: '',
    min: null,
    max: null,
    icon: null,
  })
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    setDateAndTime(moment().format('ll'))
    
    moment.locale(i18n.language);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a6e279e640c90486627dd477b46e6f5c`,
        {
          cancelToken: new axios.CancelToken((c) => {
            cancelAxios = c
          }),
        }
      )
      .then((response) => {
        const responseTemp = Math.round(response.data.main.temp - 273.15)
        const min = Math.round(response.data.main.temp_min - 273.15)
        const max = Math.round(response.data.main.temp_max - 273.15)
        const description = response.data.weather[0].description
        const responseIcon = response.data.weather[0].icon

        setTemp({
          number: responseTemp,
          min,
          max,
          description,
          icon: `https://openweathermap.org/img/wn/${responseIcon}@2x.png`,
        })
      })
      .catch((err) => {
        console.log(err)
      })

    return () => {
      if (cancelAxios) cancelAxios()
    }
  }, [lat, lon ])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
        
      }}
    >
      <div
        style={{
          backgroundColor: '#1E3A5F',
          padding: '20px',
          borderRadius: '20px',
          boxShadow: '0 12px 32px rgba(0,0,0,.25)',
          color: '#fff',
          width: '100%',
          maxWidth: '500px',
          minHeight: '300px',
          overflow: 'hidden',
        }}
      >
        {/* CITY */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '10px',
          }}
        >
          <Typography
            sx={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 'bold',
            }}
          >
            {t(city)}
          </Typography>

          <Typography
            sx={{
              color: '#D6E4F0',
              fontSize: 'clamp(.9rem,2vw,1.2rem)',
            }}
          >
            {dateAndTime}
          </Typography>
        </div>

        <hr
          style={{
            border: '1px solid rgba(255,255,255,.2)',
            margin: '20px 0',
          }}
        />

        {/* TEMP */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '15px',
          }}
        >
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Typography
                sx={{
                  fontSize: 'clamp(3rem,6vw,4.8rem)',
                  fontWeight: 'bold',
                }}
              >
                {temp.number !== null ? `${temp.number}°C` : '--°C'}
              </Typography>

              {temp.icon && (
                <img
                  src={temp.icon}
                  alt="weather"
                  style={{
                    width: 'clamp(55px,7vw,80px)',
                    height: 'clamp(55px,7vw,80px)',
                  }}
                />
              )}
            </div>

            <Typography
              sx={{
                color: '#D6E4F0',
                mt: 1,
                fontSize: 'clamp(1rem,2vw,1.2rem)',
                textTransform: 'capitalize',
              }}
            >
              {t(temp.description) || t("Loading")}
            </Typography>

            <div
              style={{
                display: 'flex',
                gap: '15px',
                marginTop: '20px',
                flexWrap: 'wrap',
              }}
            >
              <Typography sx={{ color: '#B8C7D9' }}>
                {t("Min")}: {temp.min}°C
              </Typography>

              <Typography sx={{ color: '#B8C7D9' }}>
                {t("Max")}: {temp.max}°C
              </Typography>
            </div>
          </div>

          <CloudIcon
            sx={{
              fontSize: 'clamp(4rem,8vw,6rem)',
              color: '#fff',
              flexShrink: 0,
            }}
          />
        </div>
      </div>
    </div>
  )
}