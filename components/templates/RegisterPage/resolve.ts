import yup from 'yupGlobal'

const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z_.\-@]{8,}$/
const REGEX_ONLY_NUMBER = /^\d+$/
const REGEX_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const schema = yup.object().shape({
  firstName: yup.string().required('Enter your first name'),
  lastName: yup.string().required('Enter your last name'),
  username: yup.string().required('Enter your username'),
  password: yup
    .string()
    .max(50, 'Password must be at most 50 characters')
    .min(8, 'Password must be at least 8 characters')
    .required('Enter your password'),
  email: yup
    .string()
    .required('Enter your email')
    .matches(REGEX_EMAIL, 'Email is invalid'),
  education: yup.string(),
  workPlace: yup.string(),
  location: yup.string()
  // phone: yup.string().required().matches(phoneRegExp, 'Phone number is not valid')
})
