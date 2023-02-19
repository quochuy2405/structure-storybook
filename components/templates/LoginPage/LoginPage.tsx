import { Button, Card, Loading, Title } from '@/components/atoms'
import Icon from '@/components/atoms/Icon'
import { TextFieldForm } from '@/components/molecules'
import { TStatusLoading } from '@/types/index'
import { IUserAccount } from '@/types/login'
import Link from 'next/link'
import React from 'react'
import { UseFormReturn } from 'react-hook-form/dist/types'
import { IoMdArrowRoundBack } from 'react-icons/io'
import Styles from './LoginPage.module.scss'

export interface ILoginPageProps {
  onLoginGoogle: () => void
  methods: UseFormReturn<IUserAccount, object>
  onSubmit: (data: IUserAccount) => void
  statusLoading: TStatusLoading
}

const LoginPage: React.FC<ILoginPageProps> = ({
  onLoginGoogle,
  onSubmit,
  methods,
  statusLoading
}) => {
  return (
    <>
      <div className={Styles.Login}>
        <Link href="/">
          <Button className={Styles.GoBack} icon={<IoMdArrowRoundBack />}>
            Go Back
          </Button>
        </Link>

        <Card className={Styles.LoginForm}>
          <Title size={2}>Sign In</Title>
          <form className={Styles.Form} onSubmit={methods.handleSubmit(onSubmit)}>
            <TextFieldForm
              title="User name"
              name="username"
              className={Styles.InputForm}
              methods={methods}
              required
            />
            <TextFieldForm
              title="Email"
              name="email"
              className={Styles.InputForm}
              methods={methods}
              required
            />
            <TextFieldForm
              title="Password"
              name="password"
              type="password"
              className={Styles.InputForm}
              methods={methods}
              required
            />
            <div className={Styles.Socials}>
              <Button mode="primary" type="submit">
                Sign In
              </Button>
            </div>
          </form>
          <Title size={0.8} className={Styles.SignUpWith}>
            Or Connect With Social Media
          </Title>
          <div className={Styles.Socials}>
            {/* <Button icon={<Icon type="facebook" size={20} />} outline>
            Facebook
          </Button> */}
            <Button
              icon={<Icon type="google" size={20} />}
              onClick={onLoginGoogle}
              outline
            >
              Google
            </Button>
          </div>
        </Card>
      </div>
      {statusLoading && (
        <Loading status={statusLoading.status} text={statusLoading.message} />
      )}
    </>
  )
}

export default LoginPage
