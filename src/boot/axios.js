import { boot } from 'quasar/wrappers'
import axios from 'axios'

// Creating an axios instance with the base URL of the SMS API
const smsApi = axios.create({
  baseURL: 'https://app.yezosms.com/api',
  params: {
    username: 'omariquele@vitae-erp.com',
    password: '8648d7fded9115599943b46d4f2b27ddb4a81a35'
  }
})

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$smsApi = smsApi
  // ^ ^ ^ this will allow you to use this.$smsApi (for Vue Options API form)
  //       so you can easily perform requests against the SMS API
})

export { smsApi }
