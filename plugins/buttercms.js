import Butter from 'buttercms'

export default ({ app }, inject) => {
  app.butter = Butter(process.env.BUTTER_CMS_TOKEN)
}
