import { Component } from '@angular/core';
import { LeftSideBarItem } from './config/left-sidebar-item.interface';

@Component({
  selector: 'dev-left-sidebar-item',
  templateUrl: './left-sidebar-item.component.html',
  styleUrls: ['./left-sidebar-item.component.scss']
})
export class LeftSidebarItemComponent {

  itens: LeftSideBarItem[] = [
    {
      nome: 'Areá de Trabalho',
      icon: 'work_outline',
      rota: 'teste'
    },
    {
      secao: 'APPS',
    },
    {
      nome: 'Email',
      icon: 'email',
      mostrarSubItens: false,
      subItens: [
        {
          nome: 'Caixa de Entrada',
          rota: ''
        },
        {
          nome: 'Lixo Eletronico',
          rota: ''
        }
      ]
    },
    {
      secao: 'teste 2',
    }


  ];

}
