import { TagContentType } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DemoService } from 'app/demo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input()
  @Output() Views=new EventEmitter<void>();
// implements OnChanges
  // @Input() ran:string=''

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes['ran'].currentValue)
  // }
    constructor(private tag:DemoService){

  }
  n=JSON.parse(localStorage.getItem('data') as string);
  ltc(){
    // this.tag.toggle=null
    this.Views.emit();
  }
}
