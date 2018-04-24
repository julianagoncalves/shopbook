import { Component } from '@angular/core';
import { Livro } from './livro';
import { LivroService } from './livro.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LivroService]
})

export class AppComponent {

  newLivro: Livro = new Livro();

  constructor(private livroService: LivroService) {
  }

  addLivro() {
    this.livroService.addLivro(this.newLivro);
    this.newLivro = new Livro();
  }

  removeLivro(livro) {
    this.livroService.deleteLivroById(livro.id);
  }

  get livros() {
    return this.livroService.getAllLivros();
  }

  updateLivro(livro) {
    this.livroService.updateLivroById(livro.id);
  }
}
