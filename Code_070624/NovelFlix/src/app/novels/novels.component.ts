import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-novels',
  templateUrl: './novels.component.html',
  styleUrl: './novels.component.css'
})
export class NovelsComponent 
{
  @Input() Books!:string [];
  @Input() BookImgs!:string[];

  Index:number=0;
  isDisable=false;
  currentIndex:number=0;

  Next()
  {
     this.Index++;
  }

  Prev()
  {
    this.Index--;
  }
}
