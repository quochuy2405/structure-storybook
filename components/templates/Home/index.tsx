import { InputTag, TextArea, TextField } from '@/components/atoms'
import Tab from '@/components/organisms/Tab/Tab'
import { IToastProps } from '@/components/molecules/Toast/Toast'
import useToast from '@/hooks/useToast'
import { NextPage } from '@/types/next'

const Home: NextPage = () => {
  const { create } = useToast()
  const handleAdd = () => {
    const config: Partial<IToastProps> = {
      type: 'success',
      message: 'Chào bạn',
      isClose: false
    }
    create(config)
  }
  const tabs = {
    search: { label: 'Search', children: <TextField name="search" /> },
    buy: { label: 'Buy', children: <TextArea name="buy" /> },
    price: { label: 'Price', children: <InputTag name="search" /> }
  }
  return (
    <>
      <Tab tabs={tabs} />
      <button onClick={handleAdd}></button>
    </>
  )
}

export default Home
