import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable, ObservableInput } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
//   styles: [`
//   .selected {
//     background-color: #CFD8DC !important;
//     color: white;
//   }
//   .heroes {
//     margin: 0 0 2em 0;
//     list-style-type: none;
//     padding: 0;
//     width: 15em;
//   }
//   .heroes li {
//     cursor: pointer;
//     position: relative;
//     left: 0;
//     background-color: #EEE;
//     margin: .5em;
//     padding: .3em 0;
//     height: 1.6em;
//     border-radius: 4px;
//   }
//   .heroes li.selected:hover {
//     background-color: #BBD8DC !important;
//     color: white;
//   }
//   .heroes li:hover {
//     color: #607D8B;
//     background-color: #DDD;
//     left: .1em;
//   }
//   .heroes .text {
//     position: relative;
//     top: -3px;
//   }
//   .heroes .badge {
//     display: inline-block;
//     font-size: small;
//     color: white;
//     padding: 0.8em 0.7em 0 0.7em;
//     background-color: #607D8B;
//     line-height: 1em;
//     position: relative;
//     left: -1px;
//     top: -4px;
//     height: 1.8em;
//     margin-right: .8em;
//     border-radius: 4px 0 0 4px;
//   }
// `]
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }

  ngOnInit() {
    this.getHeroes();
  }

}
