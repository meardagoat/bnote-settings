import { createI18n } from "vue-i18n"
import fr from "../locales/fr.json"
import en from "../locales/en.json"
import it from "../locales/it.json"

const i18n = createI18n({
  locale: "fr",
  messages: {
    fr,
    en,
    it
  }
})

export default i18n
