import { Request, Response } from 'express';
import { CreateCartaoCreditoService } from '../services/CreateCartaoCreditoService';

class CreateCartaoCreditoController {
  async handle(request: Request, response: Response) {
    const { numero, nomeTitular, dataValidade, cvv, usuarioId } = request.body;

    const token = await CreateCartaoCreditoService.autenticarCartao({
      numero,
      nomeTitular,
      dataValidade,
      cvv,
      usuarioId,
    });

    // Envia o token para validação (a ser implementado)
    const validado = true; // Exemplo: considerando que a validação foi bem sucedida

    if (validado) {
      return response.status(200).json({ autorizado: true });
    } else {
      return response.status(401).json({ autorizado: false });
    }
  }
}

export default new CreateCartaoCreditoController();