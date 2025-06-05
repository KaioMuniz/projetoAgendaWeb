import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-cadastro-tarefas',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastro-tarefas.component.html',
  styleUrl: './cadastro-tarefas.component.css'
})
export class CadastroTarefasComponent {

  //Atributos da classe
  categorias : any[] = []; //array de objetos vazio
  mensagem : string = ''; //string de texto vazia

  //injeções de dependência
  http = inject(HttpClient);
  fb = inject(FormBuilder);

  //estrutura do formulário
  form = this.fb.group({
    titulo : new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(150)]),
    data : new FormControl('', [Validators.required]),
    hora : new FormControl('', [Validators.required]),
    finalizada : new FormControl('', [Validators.required]),
    categoriaId : new FormControl('', [Validators.required])
  });

  //função executada quando o componente é inicializado
  ngOnInit() {
    //fazendo uma requisição HTTP GET para consultar as categorias
    this.http.get(environment.apiTarefas + '/categorias')
      .subscribe((response) => { //capturando a resposta da API
        //armazenando a resposta obtida da API no atributo da classe
        this.categorias = response as any[];
      });
  }

  //função executada quando o usuário clicar no botão submit do formulário
  onSubmit() {
    //enviando uma requisição HTTP POST para a API
    this.http.post(environment.apiTarefas + '/tarefas', this.form.value)
      .subscribe((response: any) => { //capturando a resposta da API
        //exibindo mensagem de sucesso
        this.mensagem = `Tarefa ${response.titulo}, cadastrada com sucesso!`;
        this.form.reset(); //limpando os campos do formulário
      })
  }
}
