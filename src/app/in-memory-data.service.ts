import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Project } from './project';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = [
      { name: 'Restaurant Menu Website', lang: 'HTML,CSS,Javascript', desc: 'Interactive Menu, Dynamic Content, Order Management', link: 'https://github.com/dttncl/DagatRestaurant' },
      { name: 'Restaurant Menu Website2', lang: 'HTML,CSS,Javascript', desc: 'Interactive Menu, Dynamic Content, Order Management', link: 'https://github.com/dttncl/DagatRestaurant' },
    ];
    return {projects};
  }

}