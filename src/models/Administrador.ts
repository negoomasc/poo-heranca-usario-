// models/Administrador.js
import { Usuario } from './Usuario';

export class Administrador extends Usuario {
  constructor(nome, email, codigoSeguranca) {
    super(nome, email);
    this._codigoSeguranca = codigoSeguranca;
  }

  getCodigoSeguranca() {
    return this._codigoSeguranca;
  }

  autenticarComCodigo(senha, codigo) {
    return this.autenticar(senha) && codigo === this._codigoSeguranca;
  }
}
