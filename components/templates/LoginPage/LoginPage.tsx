import { Button, Card, Title } from '@/components/atoms'
import Icon from '@/components/atoms/Icon'
import { NextPage } from '@/types/next'
import React from 'react'

const LoginPage: NextPage = () => {
  return (
    <div>
      <Card>
        <Title size={1.4}>Register</Title>
        <Button icon={<Icon type="facebook" size={20} />}>Facebook</Button>
      </Card>

      <div>new</div>
    </div>
  )
}

export default LoginPage
