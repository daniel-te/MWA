import { Component, Input  } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    template: `
    <h1>{{title}}</h1>
    <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
    <div><label>Description: </label>{{hero.description}}</div>
    <div><label>Price: </label>{{hero.price}}</div>
    <div><label>Condition: </label>{{hero.condition}}</div>
    <div><label>Category: </label>{{hero.category}}</div>
  </div>
  <h2>My Heroes</h2>
  <ul class="heroes">
  <li *ngFor="let hero of heroes"
  [class.selected]="hero === hero"
  (click)="onSelect(hero)">
  <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
  </ul>
    `
  })
export class HeroDetailComponent {
    @Input() hero: Hero;
}