import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  @Output() Called = new EventEmitter();

  isHide=false;
  isShow=true;

  Hide()
  {
    this.isHide=true;
    this.isShow=false;
    this.Called.emit(this.isHide);
  }

  Show()
  {
    this.isHide=false;
    this.isShow=true;
    this.Called.emit(this.isHide);
  }
}
