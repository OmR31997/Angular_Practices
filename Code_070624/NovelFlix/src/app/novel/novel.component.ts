import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-novel',
  templateUrl: './novel.component.html',
  styleUrl: './novel.component.css'
})
export class NovelComponent 
{
  @Input() Book!:string;
  @Input() BookImg!:string;
}
