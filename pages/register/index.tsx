import { RegisterPage } from '@/components/templates'
import { schema } from '@/components/templates/RegisterPage/resolve'
import useValidate from '@/hooks/useValidate'
import type { IUserRegister } from '@/types/register'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
import axiosClient from '../api/axiosClient'
import { CREATE_REGISTER_API } from '../api/register'
import { NextPageWithLayout } from '../_app'
const initForm = {
  firstName: '',
  lastName: '',
  username: '',
  password: '',
  email: '',
  education: '',
  workPlace: '',
  location: ''
}

const Register: NextPageWithLayout = () => {
  const { enqueueSnackbar } = useSnackbar()
  const router = useRouter()
  const [statusLoading, setStatusLoading] = useState({
    status: '',
    message: ''
  })

  const { methods } = useValidate<IUserRegister>({
    validationSchema: schema,
    defaultValues: initForm
  })

  const handleUsingGPS = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude
        const lng = position.coords.latitude
        const apiKey = '9a8b8bd6fe5442bb8d8ed3ddf03983a1'
        axios
          .get(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${apiKey}`
          )
          .then((response) => {
            if (response?.data?.features[0]?.properties) {
              const { state, country, address_line1 } =
                response.data.features[0].properties
              const address = [state, address_line1, country].join(',')
              methods.setValue('location', address as string)
            }
          })
          .catch((e) => console.log(e))
      })
    }
  }
  const onSubmit = (data: IUserRegister) => {
    const statusRunning = new Promise((resolve) => {
      setTimeout(() => {
        setStatusLoading({
          status: 'email',
          message: 'Please check your email. Email is sending...'
        })
        resolve(1)
      }, 1000)
    })

    axiosClient
      .post(CREATE_REGISTER_API, data)
      .then(() => {
        statusRunning.then(async () => {
          setTimeout(() => {
            setStatusLoading({
              status: 'success',
              message: 'Register complete.'
            })
          }, 3000)
          setTimeout(() => {
            router.push('/')
          }, 5000)
        })
      })
      .catch(() => {
        enqueueSnackbar('\xa0\xa0Register failed', {
          variant: 'error',
          autoHideDuration: 3000,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right'
          }
        })
      })
  }
  const props = {
    handleUsingGPS,
    onSubmit,
    methods,
    statusLoading
  }

  return <RegisterPage {...props} />
}

export default Register
