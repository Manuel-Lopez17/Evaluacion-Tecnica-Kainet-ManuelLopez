import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        HttpClientModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        CommonModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title: string = 'test-kainet';
    expanded: boolean = true;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getTest().subscribe(res => {
            console.log(res)
        })
    }

    toggleExpanded() {
        this.expanded = !this.expanded
    }
}
