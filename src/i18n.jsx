import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        'Hello World': 'Hello World',
        Riyadh: 'Riyadh',
        Jeddah: 'Jeddah',
        Jazan: 'Jazan',
        Makkah: 'Makkah',
        Madinah: 'Madinah',
        Dammam: 'Dammam',
        Khobar: 'Khobar',
        Dhahran: 'Dhahran',
        Taif: 'Taif',
        "إنجليزي": "Arabic",
        "الصغرى": "Min",
        "الكبرى": "Max",
        "سماء صافية": "clear sky",
        "غيوم قليلة": "few clouds",
        "غيوم متفرقة": "scattered clouds",
        "غيوم كثيفة": "broken clouds",
        "أمطار خفيفة": "light rain"
      },
    },
    ar: {
      translation: {
        'Hello World': 'مرحباً بالعالم',
        'Saudi Weather Conditions': 'أحوال الطقس في السعودية',
        "Live weather for cities" : "حالة الطقس المباشرة للمدن" ,
        Riyadh: 'الرياض',
        Jeddah: 'جدة',
        Jazan: 'جازان',
        Makkah: 'مكة المكرمة',
        Madinah: 'المدينة المنورة',
        Dammam: 'الدمام',
        Khobar: 'الخبر',
        Dhahran: 'الظهران',
        Taif: 'الطائف',
        "Arabic": "إنجليزي",
        "Min": "الصغرى",
        "Max": "الكبرى",
        "clear sky": "سماء صافية",
        "few clouds": "غيوم قليلة",
        "scattered clouds": "غيوم متفرقة",
        "broken clouds": "غيوم كثيفة",
        "light rain": "أمطار خفيفة"
      },
    },
  },

  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
