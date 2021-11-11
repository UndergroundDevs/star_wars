import Header from 'components/Header'
import Main from 'assets/styles/main'
import Image from 'next/image'

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
            <div>
              <Image
                src="/trophy-1.webp"
                alt="Englosh 101 mentoria"
                layout="responsive"
                width={40}
                height={70}
              />
            </div>
            <span>
              <h1>Alta Qualidade</h1>
              <p>Produto de alto <br /> padrão</p>
            </span>
          </li>
          <li>
            <div>
              <Image
                src="/guarantee.webp"
                alt="Englosh 101 mentoria"
                layout="responsive"
                width={40}
                height={70}
              />
            </div>
            <span>
              <h1>Proteção de garantia</h1>
              <p>4 anos de garantia</p>
            </span>
          </li>
          <li>
            <div>
              <Image
                src="/shipping.webp"
                alt="Englosh 101 mentoria"
                layout="responsive"
                width={40}
                height={70}
              />
            </div>
            <span>
              <h1>Frete</h1>
              <p>Envio para todo Brasil</p>
            </span>
          </li>
          <li>
            <div>
              <Image
                src="/customer-support.webp"
                alt="Englosh 101 mentoria"
                layout="responsive"
                width={40}
                height={70}
              />
            </div>
            <span>
              <h1>Atendimento</h1>
              <p>Suporte dedicado</p>
            </span>
          </li>
        </ul>
      </SectionAboout>
    </Main>
  )
}

export default Home
