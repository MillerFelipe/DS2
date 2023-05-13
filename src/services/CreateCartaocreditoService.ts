import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { CartaoCredito } from '@prisma/client';

interface TokenData {
  id: number;
}

export class CartaoCreditoService {

  async gerarToken(cartaoCredito: CartaoCredito): Promise<string> {
    const { id } = cartaoCredito;
    const tokenData: TokenData = { id };
    const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
  }
}

interface ICreateCartaoCredito {
  numero: string;
  nomeTitular: string;
  dataValidade: Date;
  cvv: string;
  usuarioId: number;
}

class CreateCartaoCreditoService {
  async execute({
    numero,
    nomeTitular,
    dataValidade,
    cvv,
    usuarioId,
  }: ICreateCartaoCredito) {
    const prisma = new PrismaClient();

    const cartaoCredito = await prisma.cartaoCredito.create({
      data: {
        numero,
        nomeTitular,
        dataValidade,
        cvv,
        usuarioId,
      },
    });

    await prisma.$disconnect();

    return cartaoCredito;
  }
}

export { CreateCartaoCreditoService };
