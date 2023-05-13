import { Router, Request, Response, NextFunction } from "express";
import express from "express";
import { PrismaClient } from '@prisma/client';
import { CreateCartaoCreditoController } from "src\controllers\controllers\CreateCartaoCreditoController.ts";

const router = Router();
const prisma = new PrismaClient();

router.post('/controllers', new CreateCartaoCreditoController().handle)

router.get('/teste', (req: Request, res: Response) => {
    return res.json({ nome: 'felipe' });
    //throw new Error('Erro ao fazer requisição');
})

// define o middleware para tratar JSON nas requisições
router.use(express.json())

router.post('/cartoes', async (req, res) => {
    const { numero, nomeTitular, dataValidade, cvv, usuarioId } = req.body

    const cartao = await prisma.cartaoCredito.create({
        data: {
            numero,
            nomeTitular,
            dataValidade,
            cvv,
            usuarioId,
        },
    })

    res.json(cartao)
})

// define a aplicação express e define o uso do roteador
const app = express();
app.use(router);

// middleware para tratamento de erro das rotas
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        // se o valor recebido for uma instância do tipo erro
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error.'
    })
})

export { app };
