import React from "react";
import styled from "styled-components";
import ProductsList from "./Products/ProductsList";
import ProductForm from "./Products/ProductForm";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./Cart/Cart";
function App() {
  return (
    <Provider store={store}>
      <Container>
        <ProductsList />
        <ProductForm />
        <Cart />
      </Container>
    </Provider>
  );
}

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;
export default App;
