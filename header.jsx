import { Link } from "react-router-dom";

export default function Header({ carrinhoCount }) {
  return (
    <header style={{ padding: 12, background: "#0f3d25", color: "#b3ff00" }}>
      <h2>🐟 Loja de Peixes</h2>

      <nav style={{ display: "flex", gap: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/carrinho">Carrinho ({carrinhoCount})</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}
