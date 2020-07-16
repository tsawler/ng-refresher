import { Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class PersonsService {
  persons = ['Caitlin', 'Nicole', 'Jessica', 'Meghan'];



  addPerson(name: string) {
    this.persons.push(name);
    console.log(this.persons);
  }

}
