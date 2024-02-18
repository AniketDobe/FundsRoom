import React from 'react';
import { Container } from 'react-bootstrap';
import AppNavbar from './components/Navbar';
import OrdersPage from './components/OrdersPage';
import Footer from './components/Footer'; // Import the Footer component

const App = () => {
  return (
    <div>
      <AppNavbar />
      <Container>
        <OrdersPage />
      </Container>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default App;
