import React from 'react';
import { v4 as uuid } from 'uuid';
import useLocalStorage from 'hooks/hooks';

import Form from 'components/Form';
import { Section, SectionTitle, Container } from 'components/App.styled';

export default function SecondPage() {
  const [products, setProducts] = useLocalStorage('products', []);

  const handleFormSubmit = ({ dessert, calories, fat, carbs, protein }) => {
    const newObject = { id: uuid(), dessert, calories, fat, carbs, protein };
    setProducts([...products, newObject]);
  };
  return (
    <>
      <Section>
        <Container>
          <SectionTitle>Add your products</SectionTitle>

          <Form onSubmit={handleFormSubmit} />
        </Container>
      </Section>
    </>
  );
}
