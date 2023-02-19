import { Button, Card, Loading, Title } from '@/components/atoms'
import { TextFieldForm } from '@/components/molecules'
import { TStatusLoading } from '@/types/index'
import { IUserRegister } from '@/types/register'
import Link from 'next/link'
import React from 'react'
import { UseFormReturn } from 'react-hook-form/dist/types'
import { IoMdArrowRoundBack } from 'react-icons/io'
import Styles from './RegisterPage.module.scss'

export interface IRegisterPageProps {
  handleUsingGPS?: () => void
  onSubmit: (data: IUserRegister) => void
  methods: UseFormReturn<IUserRegister, object>
  statusLoading: TStatusLoading
}

const RegisterPage: React.FC<IRegisterPageProps> = ({
  handleUsingGPS,
  onSubmit,
  methods,
  statusLoading
}) => {
  return (
    <>
      <div className={Styles.Register}>
        <Link href="/">
          <Button className={Styles.GoBack} icon={<IoMdArrowRoundBack />}>
            Go Back
          </Button>
        </Link>

        <Card className={Styles.RegisterForm}>
          <Title size={2}>Sign Up</Title>
          <form className={Styles.Form} onSubmit={methods.handleSubmit(onSubmit)}>
            <div className={Styles.FormCol}>
              <div className={Styles.FormRow}>
                <TextFieldForm
                  title="First name"
                  name="firstName"
                  methods={methods}
                  className={Styles.InputForm}
                  required
                />
                <TextFieldForm
                  title="Last name"
                  name="lastName"
                  methods={methods}
                  className={Styles.InputForm}
                  required
                />
              </div>
              <div className={Styles.FormRow}>
                <TextFieldForm
                  title="Location"
                  name="location"
                  methods={methods}
                  className={Styles.InputForm}
                />
                <Button
                  className={Styles.ButtonGetGPS}
                  onClick={handleUsingGPS}
                  mode="warning"
                >
                  <span>Take GPS</span>
                </Button>
              </div>
              <TextFieldForm
                title="Education"
                name="education"
                methods={methods}
                className={Styles.InputForm}
              />
              <TextFieldForm
                title="Work Place"
                name="workPlace"
                methods={methods}
                className={Styles.InputForm}
              />
            </div>
            <div className={Styles.FormCol}>
              <TextFieldForm
                title="Username"
                name="username"
                methods={methods}
                className={Styles.InputForm}
                required
              />
              <TextFieldForm
                title="Email"
                name="email"
                methods={methods}
                className={Styles.InputForm}
                required
              />
              <TextFieldForm
                title="Password"
                name="password"
                type="password"
                methods={methods}
                className={Styles.InputForm}
                required
              />

              <Button className={Styles.Submit} mode="primary" type="submit">
                Sign Up
              </Button>
            </div>
          </form>
        </Card>
      </div>
      {statusLoading && (
        <Loading status={statusLoading.status} text={statusLoading.message} />
      )}
    </>
  )
}

export default RegisterPage
