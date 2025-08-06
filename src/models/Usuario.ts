// models/Usuario.js
export class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
    this.senha = `${nome}${email}123`; // senha gerada automaticamente
  }

  autenticar(senha) {
    return senha === this.senha;
  }
}
