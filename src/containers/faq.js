import React from 'react'
import faqsData from '../fixtures/faqs.json'
import Accordion from '../components/accordion/Accordion'
import OptForm from '../components/opt-form/OptForm'

export const FaqContainer = () => {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map(({ id, header, body }) => (
        <Accordion.Item key={id}>
          <Accordion.Header>{header}</Accordion.Header>
          <Accordion.Body>{body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <OptForm>
        <OptForm.Input placeholder="Email Address"></OptForm.Input>
        <OptForm.Button>Try It Now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
      </OptForm>
    </Accordion>
  )
}
