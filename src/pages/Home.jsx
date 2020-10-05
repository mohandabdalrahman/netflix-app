import React from 'react';
import { JumbtronContainer } from '../containers/Jumbtron';
import { FooterContainer } from '../containers/footer';
import { FaqContainer } from '../containers/faq';
import { HeaderContainer } from '../containers/header';
const Home = () => {
  return (
    <HeaderContainer>
      <JumbtronContainer />
      <FaqContainer />
      <FooterContainer />
    </HeaderContainer>
  );
};

export default Home;
