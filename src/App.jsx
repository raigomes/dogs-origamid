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
import Conta from "./components/Conta/Conta";
import ContaPostar from "./components/Conta/ContaPostar";
import ContaEstatisticas from "./components/Conta/ContaEstatisticas";
import ContaFeed from "./components/Conta/ContaFeed";

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
            <Route path="conta" element={<Conta />}>
              <Route index element={<ContaFeed />} />
              <Route path="estatisticas" element={<ContaEstatisticas />} />
              <Route path="postar" element={<ContaPostar />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
