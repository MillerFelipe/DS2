import jwt from 'jsonwebtoken';

function validarToken(token: string, chaveSecreta: string) {
  try {
    jwt.verify(token, chaveSecreta);
    return true;
  } catch {
    return false;
  }
}
