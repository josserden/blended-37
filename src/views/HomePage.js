import React from 'react';

import useLocalStorage from 'hooks/hooks';

import BasicTable from 'components/Table';
import 'components/App.styled';
import { Section, SectionTitle, Container } from 'components/App.styled';

export default function HomePage() {
  const [products, setProducts] = useLocalStorage('products', []);

  return (
    <>
      <Section>
        <Container>
          <SectionTitle>Desserts calories</SectionTitle>

          <BasicTable data={products} />
        </Container>
      </Section>
    </>
  );
}
