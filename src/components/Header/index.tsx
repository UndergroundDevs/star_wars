import { HeaderContent, HeaderMobile } from './styles'
import { useState, MouseEvent } from 'react'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Button, IconButton } from '@chakra-ui/button'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { Instagram, FacebookSquare } from '@styled-icons/boxicons-logos'
import Link from 'next/link'
import Image from 'next/image'

const Header: React.FC<{ index: Function }> = ({ index }) => {
  const [ isOpen, setIsOpen ] = useState(false);

  const openMenu : React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    if (!isOpen) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  function onScrollTab(event: MouseEvent<HTMLButtonElement>, index2: number) {
    event.preventDefault()
    const sectionElement = document.querySelector('#portifolio');

    if (!sectionElement)
      return;

    index(index2);
    sectionElement?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  function onScroll(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    const section = event.currentTarget.getAttribute('href');
    if (!section)
      return;
    
    const sectionElement = document.querySelector(section);
    if (!sectionElement)
      return;

    sectionElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
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
                <MenuItem onClick={(event) => { onScrollTab(event, 0) }}>
                  Quarto
                </MenuItem>
                <MenuItem>
                    <a href="" >Sala</a>
                </MenuItem>
                <MenuItem>
                    <a href="" >Cozinha</a>
                </MenuItem>
                <MenuItem>
                    <a href="" >
                      Banheiro
                    </a>
                </MenuItem>
              </MenuList>
            </Menu>
          </li>
          <li>
            <a href="#portifolio" onClick={onScroll}>
              Portifólios
            </a>
          </li>
          <li>
            <a href="#contact" onClick={onScroll}>
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
                  <a href="">Quarto</a>
                </MenuItem>
                <MenuItem>
                  <a href="">Sala</a>
                </MenuItem>
                <MenuItem>
                  <a href="">Cozinha</a>
                </MenuItem>
                <MenuItem>
                  <a href="">
                    Banheiro
                  </a>
                </MenuItem>
              </MenuList>
            </Menu>
          </li>
          <li>
            <a href="#portifolio" onClick={onScroll}>
              Portifólios
            </a>
          </li>
          <li>
            <a href="#contact" onClick={onScroll}>
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