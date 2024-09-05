import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent 
{
  io_path:string='';
  s_path:string='';
  Send()
  {
    this.s_path=this.io_path;
  }
}
