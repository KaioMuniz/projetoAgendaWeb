import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-edicao-tarefas',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './edicao-tarefas.component.html',
  styleUrl: './edicao-tarefas.component.css'
})
export class EdicaoTarefasComponent {

  //injeções de dependência
  http = inject(HttpClient); //integração com o backend
  fb = inject(FormBuilder); //formulários reativos
  activated = inject(ActivatedRoute); //captura de parâmetros da rota

  //Atributos do componente
  id: string = '';
  categorias: any[] = []; //lista de categorias
  mensagem: string = ''; //mensagem de feedback

  //estrutura do formulário
  form = this.fb.group({
    titulo : new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(150)]),
    data : new FormControl('', [Validators.required]),
    hora : new FormControl('', [Validators.required]),
    finalizado : new FormControl('', [Validators.required]),
    categoriaId : new FormControl('', [Validators.required])
  });

  //função executada ao iniciar o componente
  ngOnInit() {

    this.id = this.activated.snapshot.params['id']; //captura o id da tarefa da rota

    //consultando a tarefa no backend
    this.http.get(environment.apiTarefas + "/tarefas/" + this.id)
      .subscribe((response: any) => { //aguarda a resposta do backend
        //preencher o formulário com os dados da tarefa
        this.form.patchValue({
          titulo: response.titulo, //atribui o título da tarefa
          data: response.data, //atribui a data da tarefa
          hora: response.hora, //atribui a hora da tarefa
          finalizado: response.finalizado, //atribui o status de finalização da tarefa
          categoriaId: response.categoria.id //atribui o id da categoria da tarefa
        });
      })

     //fazendo uma requisição HTTP GET para consultar as categorias
    this.http.get(environment.apiTarefas + '/categorias')
      .subscribe((response) => { //capturando a resposta da API
        //armazenando a resposta obtida da API no atributo da classe
        this.categorias = response as any[];
      });
  }

  //função executada quando o usuário clicar no botão submit do formulário
  onSubmit() {
    //enviando uma requisição HTTP PUT para a API
    this.http.put(environment.apiTarefas + '/tarefas/' + this.id, this.form.value)
      .subscribe((response: any) => { //capturando a resposta da API
        //exibindo mensagem de sucesso
        this.mensagem = `Tarefa ${response.titulo}, atualizada com sucesso!`;
      })
  }

}
