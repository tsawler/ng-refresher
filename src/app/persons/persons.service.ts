import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class PersonsService {
  personsChanged = new Subject<string[]>();
  persons: string[] = [];

  constructor(private http: HttpClient) {
  }

  fetchPersons(){
    this.http.get<any>('https://swapi.py4e.com/api/people/').pipe(map(resData => {
      return resData.results.map(character => character.name);
    })).subscribe(resData => {
      this.personsChanged.next(resData);
    });
  }

  addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons);
    console.log(this.persons);
  }

  removePerson(name: string) {
    this.persons = this.persons.filter(person => {
      return person !== name;
    })
    this.personsChanged.next(this.persons);
    console.log(this.persons);
  }

}
