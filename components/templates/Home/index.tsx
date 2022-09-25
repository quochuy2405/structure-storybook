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
  return <button onClick={handleAdd}>add</button>
}

export default Home
