import {
  MAIN_TAG_AIDE,
  MAIN_TAG_CONTACT,
  MAIN_TAG_ACTIVITE,
  TAG_ONE_HOUR,
  TAG_HALF_DAY,
  TAG_FEW_MINUTES,
  TAG_ALL_MY_TIME,
  TAG_CITIZEN,
  TAG_CHILD,
  TAG_RELATIVE,
  TAG_HEALTH_CARE_PROVIDER,
  DAILY_CHALLENGE
} from '~/helpers/constants'

export const tagColors = {
  [MAIN_TAG_AIDE]: 'is-light-grey',
  [MAIN_TAG_CONTACT]: 'is-light-grey',
  [MAIN_TAG_ACTIVITE]: 'is-light-grey',
  [TAG_ONE_HOUR]: 'is-green',
  [TAG_HALF_DAY]: 'is-green',
  [TAG_FEW_MINUTES]: 'is-green',
  [TAG_ALL_MY_TIME]: 'is-green',
  [TAG_CITIZEN]: 'is-blue',
  [TAG_CHILD]: 'is-blue',
  [TAG_RELATIVE]: 'is-blue',
  [TAG_HEALTH_CARE_PROVIDER]: 'is-blue',
  [DAILY_CHALLENGE]: 'is-social-network-color'
}
