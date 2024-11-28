import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;


  details: any[] = [ 
  ];
  datas: any[] = [
    // { name: "vikrant", number: 9528727691, email: "vik@gmail.com", hobbies: "singing", description: "hello " }
  ];
 
  idnx:number;
  user:any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formsection();
  }


  formsection() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', Validators.required],
      hobbies: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  submit() {
    console.log(this.form.value)
      if (this.form.valid) {
      let storedData = JSON.parse(localStorage.getItem('user')) || [];
      storedData.push(this.form.value);
      this.datas = storedData
      localStorage.setItem('user', JSON.stringify(this.datas));
      // this.datas.push(this.form.value);
      // console.log(this.datas,'datas value');
      this.form.reset();
    }
    // localStorage.setItem('user',JSON.stringify(this.datas));
  }
  reset() {
    this.form.reset();
  }

}
