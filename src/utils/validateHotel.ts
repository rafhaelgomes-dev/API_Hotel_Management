export const validate = (data:any) => {
  const { nome, cnpj, pais, estado, cidade  } = data;

  if (!nome || nome.length === 0) {
    return { validate: false, message: 'O Nome é obrigatório' , statusCode: 401 };
  }

  if (!cnpj || cnpj.length === 0) {
    return { validate: false, message: 'O cnpj é obrigatório' , statusCode: 401 };
  }

  if (!pais || pais.length === 0) {
    return { validate: false, message: 'O pais é obrigatório' , statusCode: 401 };
  }

  if (!estado || estado.length === 0) {
    return { validate: false, message: 'O estado é obrigatório' , statusCode: 401 };
  }

  if (!cidade || cidade.length === 0) {
    return { validate: false, message: 'O cidade é obrigatório' , statusCode: 401 };
  }

  return { validate: true, message: 'ok' , statusCode: 200 };
}