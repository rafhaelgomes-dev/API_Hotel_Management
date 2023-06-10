export abstract class Hotel {
  public nome: string;
  public cnpj: string;
  public pais: string;
  public estado: string;
  public cidade: string;

  constructor() {
    this.nome = '';
    this.cnpj = '';
    this.pais = '';
    this.estado = '';
    this.cidade = '';
  }
};