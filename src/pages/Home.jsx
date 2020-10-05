import React from 'react';
import { JumbtronContainer } from '../containers/Jumbtron';
import { FooterContainer } from '../containers/footer';
import { FaqContainer } from '../containers/faq';
import { HeaderContainer } from '../containers/header';
import OptForm from '../components/opt-form/OptForm';
import Feature from '../components/Feature/Feature';
const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email Address"></OptForm.Input>
            <OptForm.Button>Try It Now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbtronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
