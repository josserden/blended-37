import * as React from "react";
import { v4 as uuid } from "uuid";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useLocalStorage from "../../hooks/hooks";
import Form from "../Form";
import BasicTable from "../Table";
import "./App.styled.js";
import { Section, SectionTitle, Container } from "./App.styled";

function App() {
  const [products, setProducts] = useLocalStorage("products", []);

  const handleFormSubmit = ({ dessert, calories, fat, carbs, protein }) => {
    const newObject = { id: uuid(), dessert, calories, fat, carbs, protein };
    setProducts([...products, newObject]);
  };

  return (
    <>
      <Section>
        <Container>
          <SectionTitle>Desserts calories</SectionTitle>
          <Form onSubmit={handleFormSubmit} />
          <BasicTable data={products} />
        </Container>
      </Section>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
