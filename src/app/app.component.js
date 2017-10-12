"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Products';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>{{title}}</h1>\n  <div *ngIf=\"selectedHero\">\n  <h2>{{selectedHero.name}} details!</h2>\n  <div><label>id: </label>{{selectedHero.id}}</div>\n  <div>\n    <label>name: </label>\n    <input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\"/>\n  </div>\n  <div><label>Description: </label>{{selectedHero.description}}</div>\n  <div><label>Price: </label>{{selectedHero.price}}</div>\n  <div><label>Condition: </label>{{selectedHero.condition}}</div>\n  <div><label>Category: </label>{{selectedHero.category}}</div>\n</div>\n<h2>My Heroes</h2>\n<ul class=\"heroes\">\n<li *ngFor=\"let hero of heroes\"\n[class.selected]=\"hero === selectedHero\"\n(click)=\"onSelect(hero)\">\n<span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n</li>\n</ul>\n  ",
        styles: ["\n.selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.heroes {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.heroes li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.heroes li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.heroes li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.heroes .text {\n  position: relative;\n  top: -3px;\n}\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
var HEROES = [
    { id: 11, name: 'Samsung 6', description: 'version 6 mobile', price: 323, condition: 'New', category: 'Mobile phone' },
    { id: 12, name: 'Samsung 7', description: 'Version 7 mobile', price: 375, condition: 'New', category: 'Mobile phone' },
    { id: 13, name: 'Samsung 8', description: 'version 8 mobile', price: 567, condition: 'New', category: 'Mobile Phone' },
    { id: 14, name: 'iPhone 7', description: 'Version 7 iphone', price: 233, condition: 'Used', category: 'Mobile Phone' },
    { id: 15, name: 'Toyota', description: 'toyota car', price: 454, condition: 'New', category: 'Car' },
    { id: 16, name: 'Bicycle', description: 'Bike', price: 645, condition: 'Like New', category: 'Bike' },
    { id: 17, name: 'Scooter', description: 'scooter motorbike', price: 458, condition: 'Used', category: 'MotorBike' },
    { id: 18, name: 'HP', description: 'Expensive laptop', price: 456, condition: 'Mint', category: 'Laptop' },
    { id: 19, name: 'Dell', description: 'Moderate laptop', price: 345, condition: 'Used', category: 'Laptop' },
    { id: 20, name: 'Acer', description: 'Average laptop', price: 674, condition: 'New', category: 'Laptop' }
];
//# sourceMappingURL=app.component.js.map