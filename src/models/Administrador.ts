// models/Administrador.js
import { Usuario } from './Usuario';

export class Administrador extends Usuario {
  constructor(nome, email, codigoSeguranca) {
    super(nome, email);
    this.codigoSeguranca = codigoSeguranca;
  }

  autenticarComCodigo(senha, codigo) {
    return this.autenticar(senha) && codigo === this.codigoSeguranca;
  }
}
