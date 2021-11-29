import { Instagram, FacebookSquare } from '@styled-icons/boxicons-logos'
import { Telephone, Heart } from '@styled-icons/foundation'
import { Map } from '@styled-icons/boxicons-solid'
import { FooterComponent } from './styles'

import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <FooterComponent>
        <div className="content-footer">
          <nav>
            <a href="" className="home-logo">
              <Image
                src="/logo-4.webp"
                alt="N-House Planejados"
                width="176px"
                height="108px"
              />
            </a>
            <div className="content-links">
              <ul>
                <li>
                  <h1>Menu</h1>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      Contato
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      Portífolio
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      Dicas
                    </a>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <h1>Pagamento</h1>
                </li>
                <li>
                  Dinheiro
                </li>
                <li>
                  PIX
                </li>
                <li>
                  Cartão de crédito
                </li>
                <li className="content-social-medias">
                  <a href="">
                    <Instagram size="50px" color="#B18B5A" />
                  </a>
                  <a href="">
                    <FacebookSquare size="50px" color="#B18B5A" />
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <h1>Contato</h1>
                </li>
                <li>
                  <Map size="20px" color="#898989" style={{ marginRight: '15px' }} /> Brasília - DF
                </li>
                <li>
                  <Telephone size="20px" color="#898989" style={{ marginRight: '15px' }} />
                  <a href="tel:61999702525">(61) 9 9970-2525</a>
                </li>
                <li>
                  Coimbra e Lima LTDA
                </li>
              </ul>
            </div>
          </nav>
          <div className="copyright">
            <p>
              Copyright N House Planejados 2021  Feito com 
              <Heart size="25px" color="#FF0000" style={{ margin: '0 15px' }} />
              pela &nbsp;
              <a href="http://www.undergrounds.rf.gd/" target="_blank" rel="noopener noreferrer">
                Underground DEVs
              </a>
            </p>
          </div>
        </div>
      </FooterComponent>
    </>
  )
}

export default Footer