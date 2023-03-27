import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'home', name: 'Entities', type: 'link', icon: 'web' },
    { state: 'list-productConsumerEntityyyyyyyyyyyyyyyyyyyy', name: 'ProductConsumerEntityyyyyyyyyyyyyyyyyyyy', type: 'link', icon: 'view_list' },
    { state: 'list-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy', name: 'StudentTeacherEntityyyyyyyyyyyyyyyyyyyyy', type: 'link', icon: 'view_list' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
