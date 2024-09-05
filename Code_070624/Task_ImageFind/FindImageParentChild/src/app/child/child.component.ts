import { Component, Input } from "@angular/core";

@Component
({
    selector: 'child-root',
    templateUrl: './child.component.html',
    styleUrl: './child.component.css'
})

export class ChildComponent
{
    @Input() s_path!:string;

}