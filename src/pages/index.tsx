import Header from 'components/Header'
import Main from 'assets/styles/main'

import type { NextPage } from 'next'
import { SectionAboout } from 'assets/styles/sectionAbou'
import { SectionHome } from 'assets/styles/sectionHome'

const Home: NextPage = () => {
  return (
    <Main>
      <Header />
      <SectionHome>
        <h1>Section Home</h1>
      </SectionHome>
      <SectionAboout>
        <ul>
          <li>
            <div></div>
            <span>
              <h1></h1>
              <p></p>
            </span>
          </li>
          <li>
            <div></div>
            <span>
              <h1></h1>
              <p></p>
            </span>
          </li>
          <li>
            <div></div>
            <span>
              <h1></h1>
              <p></p>
            </span>
          </li>
          <li>
            <div></div>
            <span>
              <h1></h1>
              <p></p>
            </span>
          </li>
        </ul>
      </SectionAboout>
    </Main>
  )
}

export default Home
