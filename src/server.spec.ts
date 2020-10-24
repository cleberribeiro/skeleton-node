import { myFunction } from "./server";

describe('Configuração do Ambiente de Desenvolvimento', () => {
    it('deverá retornar uma string da myFunction ', () => {
        expect(myFunction()).toBe('Ambiente configurado OK');
    });
});