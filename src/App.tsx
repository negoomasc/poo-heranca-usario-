import './App.css';
import { Administrador } from './models/Administrador';

function App() {
  const admin = new Administrador('Alice', 'alice@email.com', 'ABC123');

  return (
    <>
      <h1>Informações do Administrador</h1>
      <p>Nome: {admin.getNome()}</p>
      <p>Email: {admin.getEmail()}</p>
      <p>Código de Segurança: {admin.getCodigoSeguranca()}</p>
    </>
  );
}

export default App;
