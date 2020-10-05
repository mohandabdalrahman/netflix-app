import React from 'react'
import { Header } from '../components/accordion/styles/accordionStyle'
import * as ROUTES from '../constants/Routes'
export const HeaderContainer = ({ children }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN} >Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  )
}

