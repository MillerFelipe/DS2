import jwt from 'jsonwebtoken';
import { sign } from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface DadosCartaoCredito {
    numero: string;
    nomeTitular: string;
    dataValidade: string;
    cvv: string;
    usuarioId: number;
}

class CartaoCreditoService {
    async autenticarCartao(dadosCartaoCredito: DadosCartaoCredito): Promise<string> {
        const { numero, nomeTitular, dataValidade, cvv, usuarioId } = dadosCartaoCredito;

        // Aqui podemos fazer a autenticação dos dados do cartão de crédito

        // Se a autenticação for bem sucedida, geramos um token com as informações do cartão de crédito e do usuário
        const token = jwt.sign({
            numero,
            nomeTitular,
            dataValidade,
            cvv,
            usuarioId,
        }, process.env.JWT_SECRET || '');

        return token;
    }
}

export default new CartaoCreditoService();