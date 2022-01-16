import React from "react";

import BasicTable from "components/Table";
import "components/App.styled";
import { Section, SectionTitle, Container } from "components/App.styled";

export default function HomePage() {
  return (
    <>
      <Section>
        <Container>
          <SectionTitle>Desserts calories</SectionTitle>

          <BasicTable />
        </Container>
      </Section>
    </>
  );
}
