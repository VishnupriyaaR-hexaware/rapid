import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'home', name: 'Entities', type: 'link', icon: 'web' },
    { state: 'list-user', name: 'User', type: 'link', icon: 'view_list' },
    { state: 'list-product', name: 'Product', type: 'link', icon: 'view_list' },
    { state: 'list-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy', name: 'TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy', type: 'link', icon: 'view_list' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
