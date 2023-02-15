import type { NextPage } from '@/types/next'
import Layouts from '../layouts'
import Home from './home'

const App: NextPage = () => {
  return (
    <Layouts>
      <Home />
    </Layouts>
  )
}

export default App
