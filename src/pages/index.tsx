import Header from 'components/Header'
import Main from 'assets/styles/main'
import Image from 'next/image'
import Footer from 'components/Footer'
import dynamic from 'next/dynamic'
import axios from 'axios'

import { useState, ChangeEvent, MouseEvent } from 'react'
import type { NextPage } from 'next'
import { SectionAboout } from 'assets/styles/sectionAbou'
import { SectionHome } from 'assets/styles/sectionHome'
import { SectionPlannedFurniture } from 'assets/styles/section-planned-furniture'
import { SectionOurCreativeProcess } from 'assets/styles/our-creative-process'
import { SectionContact } from 'assets/styles/section-contact'
import { SectionPortifolio } from 'assets/styles/portfolio'
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useToast,
} from '@chakra-ui/react'
import { ComminSoon } from 'assets/styles/comingSoon'
import { formValidation } from '../assets/yup/sendEmail';

const CarouselComponentSSR = dynamic(
  () => import('../components/Carousel'),
  { ssr: true }
)

export interface FieldInitalInput {
  name: string;
  email: string;
  address: string;
  message: string;
}

const Home: NextPage = () => {
  const [ formData, setFormData ] = useState<FieldInitalInput>({
    name: "",
    email: "",
    address: "",
    message: "",
  });
  const toast = useToast()

  function handleInput(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function sendEmail(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    
    try {
      await formValidation.validate(formData, { abortEarly: false })
    } catch (error: any) {
      const messageError = error.errors as string[];
      messageError.forEach((item) => {
        toast({
          title: `Error: ${item}`,
          status: 'error',
          isClosable: true,
          duration: 5000,
        })
      })
    }

    axios.post(`http://localhost:3000/api/sendEmail`, formData)
      .then((res) => {
        toast({
          title: 'E-mail enviado',
          status: 'success',
          isClosable: true,
          duration: 5000,
        })
      }).catch((err) => {
        toast({
          title: 'Houve um erro interno, estamos consertando',
          status: 'warning',
          isClosable: true,
          duration: 5000,
        })
      })
  }

  return (
    <>
      <Main>
        <Header />
        <SectionHome>
          <div className="conten-carousel">
            <CarouselComponentSSR />
          </div>
          <div className="content-buget">
            <h1>
              Faça seu orçamento!
            </h1>
            <p>
              Agende agora mesmo uma visita,
              sem qualquer compromisso,
              para montarmos um orçamento.
            </p>
            <a href="#">
              Agendar visita
            </a>
          </div>
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
        <SectionPlannedFurniture>
          <div className="container-picture">
            <Image
              src="/image-10.webp"
              alt=""
              width="931" height="584" layout="responsive" objectFit="cover"
            />
          </div>
          <aside>
            <h1>
              Móveis Planejados
            </h1>
            <p>
              Nossos móveis planejados trazem inspiração e modernidade para o seu lar.
              Além de serem produtos com um design elegante trazeremos a praticidade
              para o seu dia a dia, já que  nossos móveis contribuem para o melhor
              aproveitamento do seu espaço, já que todas as peças são sob medida.
            </p>
          </aside>
        </SectionPlannedFurniture>
        <SectionOurCreativeProcess>
          <div className="content-our-creative-process">
            <h1>Conheça nosso <br /> trabalho</h1>
            <p>
              Entenda como funcionar
              <br />
              nosso processo criativo!
            </p>
            <a href="http://google.com" target="_blank" rel="noopener noreferrer">
              Toque aqui
            </a>
          </div>
          <div className="content-lets-start">
            <h1>Nosso processo criativo</h1>
            <h2>Como vamos começar?</h2>
            <ul>
              <li>
                <div className="container-icon" >
                  <Image
                    src="/Vector.webp"
                    alt="Englosh 101 mentoria"
                    layout="responsive"
                    width={20}
                    height={20}
                  />
                </div>
                <span>
                  Vamos tirar todas as medidas do seu imovel.
                  <br />
                  <span>
                    Para isso basta agendar uma visita!
                  </span>
                </span>
              </li>
              <li>
                <div className="container-icon" >
                  <Image
                    src="/Vector-_1_.webp"
                    alt="Englosh 101 mentoria"
                    layout="responsive"
                    width={60}
                    height={60}
                  />
                </div>
                <span>
                  vamos apresentar 
                  todo o projeto para aprovação
                </span>
              </li>
              <li>
                <div className="container-icon" >
                  <Image
                    src="/carbon_delivery-add.webp"
                    alt="Englosh 101 mentoria"
                    layout="responsive"
                    width={60}
                    height={60}
                  />
                </div>
                <span>
                  Faremos a entrega em tempo recorde
                  para que você não fique parado
                </span>
              </li>
              <li>
                <div className="container-icon" >
                  <Image
                    src="/whh_screwdriver.webp"
                    alt="Englosh 101 mentoria"
                    layout="responsive"
                    width={60}
                    height={60}
                  />
                </div>
                <span>
                  Faremos a montagaem dos seus móveis em tempo recorde!
                </span>
              </li>
            </ul>
          </div>
        </SectionOurCreativeProcess>
        <SectionContact id="contact">
          <div>
            <h1>Deseja nos <br /> contatar?</h1>
            <p>
              Basta preencher o formúlario ao <br />
              lado com seus <br /> 
              dados e nos enviar!
            </p>
          </div>
          <form>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Insira seu nome aqui!"
              value={formData.name}
              onChange={handleInput}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Insita seu email aqui!"
              value={formData.email}
              onChange={handleInput}
            />
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Endereço"
              value={formData.address}
              onChange={handleInput}
            />
            <span>Informe seu enderço em caso de agendamento</span>
            <textarea
              name="message"
              id="message"
              placeholder=" Insira sua mensagem aqui!"
              cols={30}
              rows={10}
              value={formData.message}
              onChange={handleInput}
            ></textarea>
            <button onClick={sendEmail} >Enviar</button>
          </form>
        </SectionContact>
        <SectionPortifolio id="portifolio">
          <h1>Portifólio</h1>
          <p>Conheça alguns de nossos trabalhos</p>
          <div className="container-tabs">
            <Tabs size="lg" align="center" borderColor="transparent" colorScheme="#616161" className="content-portifolio">
              <TabList color="red">
                <Tab color="#3A3A3A" className="title" >Quarto</Tab>
                <Tab color="#3A3A3A" className="title" >Sala</Tab>
                <Tab color="#3A3A3A" className="title" >Cozinha</Tab>
                <Tab color="#3A3A3A" className="title" >Banheiro</Tab>
                <Tab color="#3A3A3A" className="title" >Paineis - MDF</Tab>
                <Tab color="#3A3A3A" className="title" >Escritório</Tab>
              </TabList>

              <TabPanels width="100%" height="100%">
                <TabPanel display="flex" width="100%" height="100%" alignItems="center" padding="10px 0 10px 0">
                  <div className="container-grid">
                    <div className="photo-grid">
                      <div className="card-1">
                        <img src="/img/Rectangle-38.webp" alt="example" />
                      </div>
                      <div className="card-2">
                        <img src="/img/Rectangle-44.webp" alt="example" />
                      </div>
                      <div className="card-3">
                        <img src="/img/Rectangle-46.webp" alt="example" />
                      </div>
                      <div className="card-4">
                        <img src="/img/Rectangle-36.webp" alt="example" />
                      </div>
                      <div className="card-5">
                        <img src="/img/Rectangle-43.webp" alt="example" />
                      </div>
                      <div className="card-6">
                        <img src="/img/Rectangle-37.webp" alt="example" />
                      </div>
                      <div className="card-7">
                        <img src="/img/Rectangle-40.webp" alt="example" />
                      </div>
                      <div className="card-8">
                        <img src="/img/Rectangle-41.webp" alt="example" />
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <p>Sala!</p>
                </TabPanel>
                <TabPanel>
                  <p>Cozinha!</p>
                </TabPanel>
                <TabPanel>
                  <p>Banheiro!</p>
                </TabPanel>
                <TabPanel>
                  <p>Paineis - MDF!</p>
                </TabPanel>
                <TabPanel>
                  <p>Escritório!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </SectionPortifolio>
        <ComminSoon>
          <h1>Em breve</h1>
          <div className="content-commin-soon">
            <Image
              src="/img/Rectangle-39.webp"
              alt="Mesa com jarro de flores e uma câmera em  cima"
              width="839px"
              height="507px"
            />
          </div>
        </ComminSoon>
        <Footer />
      </Main>
    </>
  )
}

export default Home
