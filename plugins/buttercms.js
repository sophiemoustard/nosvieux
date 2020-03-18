import Butter from 'buttercms'

export default ({ app }, inject) => {
  inject('butter', Butter(process.env.BUTTER_CMS_TOKEN))
}
