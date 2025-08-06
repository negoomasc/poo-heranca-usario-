// models/Usuario.js
export class Usuario {
  constructor(nome, email) {
    this._nome = nome;
    this._email = email;
    this._senha = `${nome}${email}123`;
  }

  getNome() {
    return this._nome;
  }

  getEmail() {
    return this._email;
  }

  autenticar(senha) {
    return senha === this._senha;
  }
}
