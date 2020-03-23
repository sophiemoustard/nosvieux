// CATEGORIES
export const CAT_BOITE_A_IDEE = 'boite-a-idee'
export const CAT_ILS_LONT_FAIT = 'ils-lont-fait'

// MAIN TAGS
export const MAIN_TAG_AIDE = 'main-aide-organisationnelle'
export const MAIN_TAG_CONTACT = 'main-garder-le-contact'
export const MAIN_TAG_ACTIVITE = 'main-activite'
export const MAIN_TAG_TRAINING = 'main-formation'

// OTHER TAGS
export const TAG_ONE_HOUR = 'time-une-heure'
export const TAG_HALF_DAY = 'time-demi-journee'
export const TAG_FEW_MINUTES = 'time-quelques-minutes'
export const TAG_ALL_MY_TIME = 'time-tout-mon-temps'
export const TAG_CITIZEN = 'someone-un-citoyen-concerne'
export const TAG_CHILD = 'someone-un-enfant'
export const TAG_RELATIVE = 'someone-un-proche-dune-personne-agee'
export const TAG_HEALTH_CARE_PROVIDER = 'someone-un-professionnel-de-sante'

// TAGS FILTER LABELS
export const CITIZEN = 'Un citoyen concerné'
export const RELATIVE = "Un proche d'une personne âgée"
export const HEALTH_CARE_PROVIDER = 'Un professionnel de santé'
export const ONE_HOUR = 'Une heure'
export const HALF_DAY = 'Une demi-journée'
export const FEW_MINUTES = 'Quelques minutes'
export const ALL_MY_TIME = 'Tout mon temps'
export const AIDE = 'Aide organisationnelle'
export const CONTACT = 'Garder le contact'
export const ACTIVITE = 'Activité'
export const TRAINING = 'Formation'

// TAGS FILTER OPTIONS
export const personFilterOptions = [
  { label: CITIZEN, value: TAG_CITIZEN },
  { label: RELATIVE, value: TAG_RELATIVE },
  { label: HEALTH_CARE_PROVIDER, value: TAG_HEALTH_CARE_PROVIDER }
]
export const timeFilterOptions = [
  { label: FEW_MINUTES, value: TAG_FEW_MINUTES },
  { label: ONE_HOUR, value: TAG_ONE_HOUR },
  { label: HALF_DAY, value: TAG_HALF_DAY },
  { label: ALL_MY_TIME, value: TAG_ALL_MY_TIME }
]
export const needFilterOptions = [
  { label: TRAINING, value: MAIN_TAG_TRAINING },
  { label: ACTIVITE, value: MAIN_TAG_ACTIVITE },
  { label: AIDE, value: MAIN_TAG_AIDE },
  { label: CONTACT, value: MAIN_TAG_CONTACT }
]
export const timeTagsFilter = {
  [TAG_FEW_MINUTES]: [TAG_FEW_MINUTES],
  [TAG_ONE_HOUR]: [TAG_FEW_MINUTES, TAG_ONE_HOUR],
  [TAG_HALF_DAY]: [TAG_FEW_MINUTES, TAG_ONE_HOUR, TAG_HALF_DAY],
  [TAG_ALL_MY_TIME]: [
    TAG_FEW_MINUTES,
    TAG_ONE_HOUR,
    TAG_HALF_DAY,
    TAG_ALL_MY_TIME
  ]
}

export const DAILY_CHALLENGE = 'defi-du-jour'
