import './App.css';
import { Administrador } from './models/Administrador.ts';

function App() {
  const admin = new Administrador('Alice', 'alice@email.com', 'ABC123');
  const senhaCorreta = 'Alicealice@email.com123';
  const codigoCorreto = 'ABC123';

  return (
    <>
      <h1>Teste de Autenticação</h1>
      <p>
        Autenticação simples: {admin.autenticar(senhaCorreta) ? '✅ Sucesso' : '❌ Falhou'}
      </p>
      <p>
        Autenticação com código: {admin.autenticarComCodigo(senhaCorreta, codigoCorreto) ? '✅ Sucesso' : '❌ Falhou'}
      </p>
    </>
  );
}

export default App;
