import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import LoginForm from "./components/Login/LoginForm";
import LoginPerdeu from "./components/Login/LoginPerdeu";
import LoginCadastro from "./components/Login/LoginCadastro";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="AppBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />}>
              <Route index element={<LoginForm />} />
              <Route path="perdeu" element={<LoginPerdeu />} />
              <Route path="criar" element={<LoginCadastro />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
