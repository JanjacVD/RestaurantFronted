import i18n from 'i18next';
import {useTranslation, initReactI18next} from 'react-i18next';
import en from './translations/en.json';
import hr from './translations/hr.json';
const locale = localStorage.getItem('RestaurantSimunLocale')
i18n.use(initReactI18next).init({
    resources: {
        en: {translation: en},
        hr: {translation: hr},
    },
    lng: locale || 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: true,
    },
});
export default i18n
