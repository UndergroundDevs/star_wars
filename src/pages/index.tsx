import Header from 'components/Header'
import Main from 'assets/styles/main'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Main>
      <Header />
      <h1>hello world</h1>
    </Main>
  )
}

export default Home
