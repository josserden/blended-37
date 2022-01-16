import React from "react";

import Form from "components/Form";
import { Section, SectionTitle, Container } from "components/App.styled";

export default function SecondPage() {
  return (
    <>
      <Section>
        <Container>
          <SectionTitle>Add your products</SectionTitle>

          <Form />
        </Container>
      </Section>
    </>
  );
}
