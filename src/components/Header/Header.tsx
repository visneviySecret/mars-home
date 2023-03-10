import React from 'react'
import {
  Section,
  LogoWrapper,
  Navigation,
  Item,
  List,
  Phone,
  Wrapper,
} from './Header.style'
import { Logo } from '@/assets/Logo'
import { useTheme } from 'next-themes'
import { Container } from '@/styles/container.style'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const isDarkMode = theme === 'dark'

  const navList = [
    { title: 'О нас', ancor: '#about-us' },
    { title: 'Услуги', ancor: '#services' },
    { title: 'Отзывы', ancor: '#reviews' },
    { title: 'Контакты', ancor: '#contacts' },
  ]
  const clientPhone = '+7 999 999 99-99'

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Section>
      <Container>
        <Wrapper>
          <LogoWrapper isDarkMode={isDarkMode} onClick={handleClick}>
            <Logo />
          </LogoWrapper>

          <Navigation>
            <List>
              {navList.map((item, index) => (
                <Item key={index}>
                  <a href={item.ancor}>{item.title}</a>
                </Item>
              ))}
            </List>
          </Navigation>

          <Phone>{clientPhone}</Phone>
        </Wrapper>
      </Container>
    </Section>
  )
}
