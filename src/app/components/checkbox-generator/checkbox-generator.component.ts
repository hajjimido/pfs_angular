import { Component,OnInit, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-checkbox-generator',
  templateUrl: './checkbox-generator.component.html',
  styleUrls: ['./checkbox-generator.component.css']
})
export class CheckboxGeneratorComponent implements OnInit {

  @Input() choices:{name:string,choice:{label:string,icon:string}[]} ={name:"",choice:[]}

  @Output() onChangeEvent =new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }

  changeState(name:string,choice:string) {

    this.onChangeEvent.emit({name:name,choice:choice});

  }

}
