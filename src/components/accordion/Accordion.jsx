import React, { useState, createContext, useContext } from 'react';
import {
  Container,
  Frame,
  Title,
  Item,
  Inner,
  Header,
  Body,
} from './styles/accordionStyle';

const toggleContext = createContext();

const Accordion = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleView, setToggleView] = useState(false);
  return (
    <toggleContext.Provider value={{ toggleView, setToggleView }}>
      <Item {...restProps}>{children}</Item>;
    </toggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleView, setToggleView } = useContext(toggleContext);
  return (
    <Header onClick={() => setToggleView(!toggleView)} {...restProps}>
      {children}
      {toggleView ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleView } = useContext(toggleContext);

  return toggleView ? <Body {...restProps}>{children}</Body> : null;
};

export default Accordion;
