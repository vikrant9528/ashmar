import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { setupTestingRouterInternal } from '@angular/router/testing';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Todoproject';

  // form: FormGroup;

  // signal:boolean = false;

  // details: any[] = [ 
  // ];
  // datas: any[] = [
  //   { name: "vikrant", number: 9528727691, email: "vik@gmail.com", hobbies: "singing", description: "hello " }
  // ];
 
  // idnx:number;
  // user:any;

  // formData:any = [
  //   {control:'firstName',placeholder:'First Name',special:true},
  //   {control:'middleName',placeholder:'Middle Name',special:false},
  //   {control:'lastName',placeholder:'Last Name',special:true},
  // ]
  // @Input() t


  // constructor(private fb: FormBuilder ) { }
  // submit() {
  //   console.log(this.form.value)
  //   if(this.signal && this.form.valid){
  //     this.datas.splice(this.idnx,1,this.form.value);
  //     this.signal = !this.signal;
  //     this.form.reset();
  //   }else if (this.form.valid) {
  //     this.datas.push(this.form.value);
  //     console.log(this.datas,'datas value');
  //     this.form.reset();
  //   }
  //   localStorage.setItem('user',JSON.stringify(this.datas));
  // }


  // deleteItem(index: number) {
  //   this.datas.splice(index, 1);
  //   localStorage.setItem('user',JSON.stringify(this.datas));
  // }
  // reset() {
  //   this.form.reset();
  // }
  
  // editItem(index: number) {
  //   console.log(index,this.datas);
  //   this.idnx = index;
  //   console.log(this.idnx)
  //   this.signal = !this.signal;
  //   this.form.setValue(this.datas[index])
  //   console.log(this.signal);
  // }

  // ngOnInit() {
  //   this.formsection();
  //   this.datas = JSON.parse(localStorage.getItem('user'));
  // }

  // formsection() {
  //   this.form = this.fb.group({
  //     name: ['', Validators.required],
  //     number: ['', Validators.required],
  //     email: ['', Validators.required],
  //     hobbies: ['', Validators.required],
  //     description: ['', Validators.required]
  //   })
  // }

  
  
  // openDialog(): void { 
  //   let dialogRef = this.dialog.open(dialogbox, { 
  //     width: '800px', 
  //     data: this.details
      
  //   }); 
  //   console.log('jzgfjhvsgdf',this.details);
  
  //   dialogRef.afterClosed().subscribe(result => { 
  //     // this.animal = result; 
  //   }); 
  // } 

}


// @Component({ 
//   selector: 'dialogbox', 
//   templateUrl: 'dialogbox.html', 
// }) 
// export class dialogbox { 
  
//   constructor( 
//     public dialogRef: MatDialogRef<dialogbox>, 
//     @Inject(MAT_DIALOG_DATA) public data: any) { console.log('hhhhhh',data);
//     } 
  
//   onCancel(): void { 
//     this.dialogRef.close(); 
//   } 
  
// }

