import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../hero';
import { HeroService } from '../../_services/hero.service';

@Component({
    selector: 'selection',
    templateUrl: './selection.component.html',
    styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
    heroes: Hero[] = [];
    entries = [];

    constructor(
        private router: Router,
        private heroService: HeroService) {
    }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));

        this.entries = [
            {
                title: 'LITE CLEAN',
                value: 10.00,
                discount: 10,
                id: 1
            },
            {
                title: 'NORMAL CLEAN',
                value: 15.00,
                discount: 10,
                id: 2
            },
            {
                title: 'DEEP CLEAN',
                value: 20.00,
                discount: 10,
                id: 3
            }
        ];

    }

    onSelectionChange(radioName)
    {
        
        // if(radioName=1)
        // {
        // this.idx1 = 1;
        // this.idx2 = 0;
        // this.idx3 = 0;
        //     console.log(this.idx2)
        // }
        // else if (radioName = 2)
        // {
        //     this.idx1 = 0;
        //     this.idx2 = 1;
        //     this.idx3 = 0;  
        //     console.log(this.idx2)
        // }
        // else if (radioName = 3) {
        //     this.idx1 = 0;
        //     this.idx2 = 0;
        //     this.idx3 = 1;
        //     console.log(this.idx2)
        // }
        
    }
    gotoDetail(hero: Hero): void {
        const link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
