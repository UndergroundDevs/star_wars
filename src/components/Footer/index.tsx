import { Instagram, FacebookSquare,  } from '@styled-icons/boxicons-logos'
import { Telephone } from '@styled-icons/foundation'

import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="content-footer">
          <nav>
            <div className="logo"></div>
            <div className="content-links">
              <ul>
                <li>
                  <h1>Menu</h1>
                </li>
                <li>
                  <Link href="">
                    <a>
                      Contato
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>
                      Portífolio
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="">
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
              </ul>
              <ul>
                <li>
                  <h1>Contato</h1>
                </li>
                <li>

                </li>
                <li></li>
              </ul>
            </div>
          </nav>
          <div className="copyright">

          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer