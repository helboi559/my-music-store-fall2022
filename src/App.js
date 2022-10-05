/* eslint-disable */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './resetStyles.css';
// import { useState } from 'react';
// import { createContext,useContext } from 'react';
import HomePage from './components/pages/HomePage';
import SignInPage from './components/pages/SignInPage';
import CustomThemeProvider from './CustomThemeProvider';
import CartPage from './components/pages/CartPage';
import UserProvider from './context/UserContext';
import CartProvider from './context/CartContext';
import store from './state-management/store';
import { Provider } from 'react-redux';
// export const cartContext = createContext();
function App() {
  

  return (
    <Provider store={store}>
    <CustomThemeProvider>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage  />} />
          <Route path="/user" element={<SignInPage  />} />
          <Route
            path="/cart"
            element={(
              <CartPage
                
              />
            )}
          />
        </Routes>
      </BrowserRouter>
      
    </CustomThemeProvider>
    </Provider>
  );
}

export default App;
