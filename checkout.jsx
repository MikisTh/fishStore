export default function Checkout() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Finalizar Pedido 💳</h2>

      <input placeholder="Nome completo" />
      <br />
      <input placeholder="Endereço" />
      <br />
      <input placeholder="Telefone" />
      <br />

      <button>Confirmar Pedido</button>
    </div>
  );
}
