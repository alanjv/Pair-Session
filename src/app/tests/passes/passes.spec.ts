import { mensaje } from './passes';

describe('Pruebas correcta', ()=>{

    it( 'Debe de regresar un string',()=>{
        const resp = mensaje('Alan');

        expect( typeof  resp).toBe('string');
    });

    it( 'Debe de retornar un saludo con el nombre enviado',()=>{
        const nombre = 'Carlos';
        const resp = mensaje(nombre);

        expect( resp).toContain(nombre);
    });
});
