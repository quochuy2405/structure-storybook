import { Button, Card, TextField, Title } from '@/components/atoms'
import Icon from '@/components/atoms/Icon'
import Link from 'next/link'
import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import Styles from './LoginPage.module.scss'

export interface ILoginPageProps {
  onLoginGoogle: () => void
}

const LoginPage: React.FC<ILoginPageProps> = ({ onLoginGoogle }) => {
  return (
    <div className={Styles.Login}>
      <Link href="/">
        <Button className={Styles.GoBack} icon={<IoMdArrowRoundBack />}>
          Go Back
        </Button>
      </Link>

      <Card className={Styles.LoginForm}>
        <Title size={2}>Sign In</Title>
        <form className={Styles.Form} action="/">
          <TextField title="User name" name="username" className={Styles.InputForm} />
          <TextField title="Email" name="email" className={Styles.InputForm} />
          <TextField
            title="Password"
            name="pass"
            type="password"
            className={Styles.InputForm}
          />
          <div className={Styles.Socials}>
            <Button mode="primary">Sign In</Button>
          </div>
        </form>
        <Title size={0.8} className={Styles.SignUpWith}>
          Or Connect With Social Media
        </Title>
        <div className={Styles.Socials}>
          {/* <Button icon={<Icon type="facebook" size={20} />} outline>
            Facebook
          </Button> */}
          <Button icon={<Icon type="google" size={20} />} onClick={onLoginGoogle} outline>
            Google
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default LoginPage
