import { Routes } from '@angular/router';
import { CadastroTarefasComponent } from './components/pages/cadastro-tarefas/cadastro-tarefas.component';
import { ConsultaTarefasComponent } from './components/pages/consulta-tarefas/consulta-tarefas.component';
import { EdicaoTarefasComponent } from './components/pages/edicao-tarefas/edicao-tarefas.component';

//Mapeamento das rotas de navegação do projeto
export const routes: Routes = [
    {
        path: 'pages/cadastro-tarefas', //rota de navegação
        component: CadastroTarefasComponent //componente
    },
    {
        path: 'pages/consulta-tarefas', //rota de navegação
        component: ConsultaTarefasComponent //componente
    },
    {
        path: 'pages/edicao-tarefas/:id', //rota de navegação
        component: EdicaoTarefasComponent //componente
    }
];