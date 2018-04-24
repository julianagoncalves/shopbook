import { Injectable } from '@angular/core';
import { Livro } from './livro'

@Injectable() 
export class LivroService { //Registrar o serviço em app.module.ts 

    // define variavel ultimoId para permitir simular incremento automatico dos ids     
    ultimoId: number = 0;

    // array de livros
    livros: Livro[] = [];
    constructor() { }

    // simula um POST /livros
    addLivro(livro: Livro): LivroService {
      if (!livro.id) {
        livro.id = ++this.ultimoId;
      }
      this.livros.push(livro);
      return this;
    }

    // simula um DELETE /livros/:id
    deleteLivroById(id: number): LivroService {
      this.livros = this.livros
        .filter(livro => livro.id !== id);
      return this;
    }

    // simula um  PUT /livros/:id
    updateLivroById(id: number, values: Object = {}): Livro {
      let livro = this.getLivroById(id);
      if (!livro) {
        return null;
      }
      Object.assign(livro, values);
      return livro;
    }

    // simula GET /livros
    getAllLivros(): Livro[] {
      return this.livros;
    }

    // simula um GET /livros/:id
    getLivroById(id: number): Livro {
      return this.livros
        .filter(livro => livro.id === id)
        .pop();
    }
    /*alternaLivroComplete(livro: Livro){
      let updatedTarefa = this.updateTarefaById(tarefa.id, {
        concluida: !tarefa.concluida
      });
      return updatedTarefa;
    }*/

}
