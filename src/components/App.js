import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from 'views/HomePage';
import SecondPage from 'views/SecondPage';
import NotFound from 'views/NotFound';
import 'components/App.styled';

import Navbar from 'components/NavBar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="/add" element={<SecondPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      {/*
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
      /> */}
    </>
  );
}

export default App;
