import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoitems',
  templateUrl: './todoitems.component.html',
  styleUrls: ['./todoitems.component.scss']
})
export class TodoitemsComponent implements OnInit {

  constructor() { }

  idnx:number;
  signal:boolean = false;

  deleteItem(index: number) {
    this.datas.splice(index, 1);
    localStorage.setItem('user',JSON.stringify(this.datas));
  }

    
  editItem(index: number) {
  //  this.datas.splice(index,1)
  console.log('want to edit the items');
  }

  // editItem(index: number) {
  //   console.log(index,this.datas);
  //   this.idnx = index;
  //   console.log(this.idnx)
  //   this.signal = !this.signal;
  //   this.form.setValue(this.datas[index])
  //   console.log(this.signal);
  // }
    
  datas:any = JSON.parse(localStorage.getItem('user')) 

  ngOnInit(): void {

    
  }

  T

}
