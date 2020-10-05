import React from 'react'
import Header from '../components/Header/Header'
import * as ROUTES from '../constants/Routes'
import logo from '../logo.svg'
export const HeaderContainer = ({ children }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        <Header.ButtonLink to={ROUTES.SIGN_IN} >Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  )
}

