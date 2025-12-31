import { products } from "../data/products";

export default function Produtos({ adicionar }) {
  return (
    <div style={{ padding: 20 }}>
      <h2>🐠 Peixes disponíveis</h2>

      {products.map(p => (
        <div
          key={p.id}
          style={{
            border: "1px solid #ccc",
            margin: 8,
            padding: 8,
            borderRadius: 8,
          }}
        >
          <h3>{p.nome}</h3>
          <p>{p.desc}</p>
          <strong>R$ {p.preco.toFixed(2)}</strong>
          <br />
          <button onClick={() => adicionar(p)}>Adicionar ao carrinho</button>
        </div>
      ))}
    </div>
  );
}
