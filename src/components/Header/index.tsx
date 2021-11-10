import { HeaderContent, HeaderMobile } from './styles'
import { useState } from 'react'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Button, IconButton } from '@chakra-ui/button'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { Instagram, FacebookSquare } from '@styled-icons/boxicons-logos'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [ isOpen, setIsOpen ] = useState(false)

  const openMenu : React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    if (!isOpen) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  return (
    <>
      <HeaderContent>
        <a href="" className="container-logo">
          <Image
            src="/logo-b-nv.webp"
            alt="Englosh 101 mentoria"
            layout="responsive"
            width={322}
            height={70}
          />
        </a>
        <ul className="content-links">
          <li>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                background="transparent"
                transition="all 0.2s"
              >
                Móveis Planejados
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link href="/">
                    <a>Quarto</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">
                    <a>Sala</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">
                    <a>Cozinha</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">
                    <a>Área de Serviço</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">
                    <a>
                      Banheiro
                    </a>
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </li>
          <li>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                background="transparent"
                transition="all 0.2s"
              >
                Modelos
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link href="/">
                    <a>Quarto</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">
                    <a>Sala</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">
                    <a>Cozinha</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">
                    <a>Área de Serviço</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">
                    <a>
                      Banheiro
                    </a>
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </li>
          <li>
            <a href="">
              Portifólios
            </a>
          </li>
          <li>
            <a href="">
              Contato
            </a>
          </li>
        </ul>
        <IconButton
          variant="outline"
          aria-label="Menu"
          height="40px"
          width="40px"
          className="button"
          onClick={openMenu as unknown as React.MouseEventHandler<HTMLButtonElement>}
          icon={<HamburgerIcon height="25px" width="25px" color="#B18B5A" />}
        />
        <ul className="content-social-medias">
          <li>
            <a href="">
              <Instagram size="50px" color="#B18B5A" />
            </a>
          </li>
          <li>
            <a href="">
              <FacebookSquare size="50px" color="#B18B5A" />
            </a>
          </li>
        </ul>
      </HeaderContent>
      <HeaderMobile isOpen={isOpen}>
        <div className="my-header">
          <a href="">
            <Image
              src="/logo-b-nv.webp"
              alt="Englosh 101 mentoria"
              layout="responsive"
              width={322}
              height={70}
            />
          </a>
        </div>
        <ul className="content-links">
          <li>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                background="transparent"
                transition="all 0.2s"
              >
                Móveis Planejados
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link href="/">
                    <a>Quarto</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">
                    <a>Sala</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">
                    <a>Cozinha</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">
                    <a>Área de Serviço</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">
                    <a>
                      Banheiro
                    </a>
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </li>
          <li>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                background="transparent"
                transition="all 0.2s"
              >
                Modelos
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link href="/">
                    <a>Quarto</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">
                    <a>Sala</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">
                    <a>Cozinha</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">
                    <a>Área de Serviço</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">
                    <a>
                      Banheiro
                    </a>
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </li>
          <li>
            <a href="">
              Portifólios
            </a>
          </li>
          <li>
            <a href="">
              Contato
            </a>
          </li>
        </ul>
        <ul className="content-social-medias">
          <li>
            <a href="">
              <Instagram size="50px" color="#B18B5A" />
            </a>
          </li>
          <li>
            <a href="">
              <FacebookSquare size="50px" color="#B18B5A" />
            </a>
          </li>
        </ul>
      </HeaderMobile>
    </>
  )
}

export default Header