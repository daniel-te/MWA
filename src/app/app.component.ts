import { Component } from '@angular/core';
export class Hero {
  id: number;
  name: string;
  description: string;
  price: Number;
  condition: string;
  category: String;
}

@Component({
  selector: 'my-app',
 template: `
  <h1>{{title}}</h1>
  <div *ngIf="selectedHero">
  <h2>{{selectedHero.name}} details!</h2>
  <div><label>id: </label>{{selectedHero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="selectedHero.name" placeholder="name"/>
  </div>
  <div><label>Description: </label>{{selectedHero.description}}</div>
  <div><label>Price: </label>{{selectedHero.price}}</div>
  <div><label>Condition: </label>{{selectedHero.condition}}</div>
  <div><label>Category: </label>{{selectedHero.category}}</div>
</div>
<h2>My Heroes</h2>
<ul class="heroes">
<li *ngFor="let hero of heroes"
[class.selected]="hero === selectedHero"
(click)="onSelect(hero)">
<span class="badge">{{hero.id}}</span> {{hero.name}}
</li>
</ul>
  `
 , 
styles: [`
.selected {
  background-color: #CFD8DC !important;
  color: white;
}
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
}
.heroes li.selected:hover {
  background-color: #BBD8DC !important;
  color: white;
}
.heroes li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: .1em;
}
.heroes .text {
  position: relative;
  top: -3px;
}
.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #607D8B;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}
`]
})

export class AppComponent {
  title = 'Tour of Products';
  selectedHero: Hero;
  
  heroes = HEROES;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}



const HEROES: Hero[] = [
  { id: 11, name: 'Samsung 6', description: 'version 6 mobile',  price: 323,  condition: 'New',  category: 'Mobile phone' },
  { id: 12, name: 'Samsung 7' ,description: 'Version 7 mobile',  price: 375,  condition: 'New',  category: 'Mobile phone' },
  { id: 13, name: 'Samsung 8' ,description: 'version 8 mobile',  price: 567,  condition: 'New',  category: 'Mobile Phone'  },
  { id: 14, name: 'iPhone 7' ,description: 'Version 7 iphone',  price: 233,  condition: 'Used',  category: 'Mobile Phone'  },
  { id: 15, name: 'Toyota' ,description: 'toyota car',  price: 454,  condition: 'New',  category: 'Car' },
  { id: 16, name: 'Bicycle'  ,description: 'Bike',  price: 645,  condition: 'Like New',  category: 'Bike' },
  { id: 17, name: 'Scooter'  ,description: 'scooter motorbike',  price: 458,  condition: 'Used',  category: 'MotorBike' },
  { id: 18, name: 'HP'  ,description: 'Expensive laptop',  price: 456,  condition: 'Mint',  category: 'Laptop' },
  { id: 19, name: 'Dell' ,description: 'Moderate laptop',  price: 345,  condition: 'Used',  category: 'Laptop'  },
  { id: 20, name: 'Acer' ,description: 'Average laptop',  price: 674,  condition: 'New',  category: 'Laptop'  }
];


