import { incrementar } from './fail';

describe('Prueba que falla', ()=>{

    it('Recibe datos incorrectos', ()=>{

       const res = incrementar(50);
       expect(res).toBe(100);
    });
})
