import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = [
      {
        name: 'Restaurant Menu Website',
        lang: 'HTML,CSS,Javascript',
        desc: 'This is a responsive restaurant menu website created for my Web Development class. It uses DOM to manipulate HTML elements, handle events, and update the content dynamically.',
        link: 'https://github.com/dttncl/DagatRestaurant' 
      },
      {
        name: 'Villagô - Virtual Service Finder',
        lang: 'HTML, CSS, Javascript, PHP, MySQL, API',
        desc: 'It comes with a search feature, enabling users to find service providers that meet their specific needs and preferences, whether it\'s language, cultural background, or other criteria. It also features a map to locate nearby service providers, making it easy to find solutions within a specific distance. PHP is used for server-side processing such as interacting with database and processing form submissions.',
        link: 'https://github.com/dttncl/villago' 
      },
      {
        name: 'Portfolio Website',
        lang: 'Angular, TypeScript, SASS',
        desc: 'A platform where you can explore my work, learn about my background, and get in touch. From web development to design, I thrive on turning ideas into reality.',
        link: 'https://github.com/dttncl/portfolio' 
      },
      {
        name: 'MultiForm Windows',
        lang: 'C#, Windows Forms',
        desc: 'Developed as the final project for Object Oriented Programming using C# and Windows Forms, this application offers essential tools seamlessly integrated into a user-friendly interface. With the Number Generator, Calculator, Converters, and Validator modules, managing various tasks becomes effortless.',
        link: 'https://github.com/dttncl/MultiWinFormsProject' 
      },
    ];
    return {projects};
  }

}