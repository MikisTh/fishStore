import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";

import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Carrinho from "./pages/Carrinho";
import Checkout from "./pages/Checkout";
import Contato from "./pages/Contato";

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarAoCarrinho(produto) {
    setCarrinho(prev => [...prev, produto]);
  }

  function removerItem(index) {
    setCarrinho(prev => prev.filter((_, i) => i !== index));
  }

  return (
    <BrowserRouter>
      <Header carrinhoCount={carrinho.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/produtos"
          element={<Produtos adicionar={adicionarAoCarrinho} />}
        />
        <Route
          path="/carrinho"
          element={<Carrinho carrinho={carrinho} remover={removerItem} />}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}
