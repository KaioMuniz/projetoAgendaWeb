import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //criando um objeto da classe httpclient

  private http = inject(HttpClient)

  //função executada sepre que a pagina for aberta
  ngOnInit(){
    

      //executando uma requisição para o endpoint de consulta de categorias
      this.http.get('http://localhost:8081/api/v1/categorias') 
        .subscribe((dados) => { //capturando os dados obtidos
            console.table(dados);
        });
  }
}
