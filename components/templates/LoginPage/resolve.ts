import yup from 'yupGlobal'

const REGEX_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const schema = yup.object().shape({
  username: yup.string().required('Enter your username'),
  password: yup
    .string()
    .max(50, 'Password must be at most 50 characters')
    .min(8, 'Password must be at least 8 characters')
    .required('Enter your password'),
  email: yup
    .string()
    .required('Enter your email')
    .matches(REGEX_EMAIL, 'Email is invalid')
})
