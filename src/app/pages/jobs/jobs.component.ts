import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  vagas = [
    {
      titulo: 'Desenvolvedor Front-End',
      desc: 'Responsável pelo desenvolvimento e manutenção de interfaces web responsivas utilizando React.',
      salario: 'R$ 6.500,00',
      empresa: 'Tech Solutions LTDA'
    },
    {
      titulo: 'Analista de Dados',
      desc: 'Atuar na coleta, análise e visualização de dados para suporte à tomada de decisões estratégicas.',
      salario: 'R$ 7.200,00',
      empresa: 'Data Insights Brasil'
    },
    {
      titulo: 'Designer UX/UI',
      desc: 'Criar protótipos e interfaces intuitivas focadas na experiência do usuário.',
      salario: 'R$ 5.800,00',
      empresa: 'Studio Criativo XYZ'
    },
    {
      titulo: 'Engenheiro de Software Back-End',
      desc: 'Desenvolver APIs e serviços em Node.js, com foco em escalabilidade e desempenho.',
      salario: 'R$ 9.000,00',
      empresa: 'Innovatech Corp'
    },
    {
      titulo: 'Gerente de Projetos',
      desc: 'Liderar equipes de desenvolvimento ágil, gerenciar cronogramas e garantir a entrega de projetos no prazo.',
      salario: 'R$ 11.000,00',
      empresa: 'Global IT Services'
    }
  ];
}
