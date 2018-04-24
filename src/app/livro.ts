export class Livro {

    id: number;
    nome: string;
    edicao: number;
    ano: number;
    imagem: string;

    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}



