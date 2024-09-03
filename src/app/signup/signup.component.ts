import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { DemoService } from 'app/demo.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent  {

  @Output() Views=new EventEmitter<void>();

  na='';
  ng:FormGroup;


  ngOnInit(){
    setInterval(()=>{
      // let a=new Date().getSeconds()
      // console.log(a)
      // let u=JSON.parse(localStorage.getItem('data') as string)
      // console.log(u)

    },3000)
  }





a:any=[];

constructor(private sign:DemoService, private fm:FormBuilder) {
this.ng=this.fm.group({
  
})

let u=JSON.parse(localStorage.getItem('data') as string)
this.a=u;


}
ch:ValidatorFn =
  (abstractControl: AbstractControl): ValidationErrors | null => {


    if(abstractControl.value){
    let f:string=abstractControl.value;
    let ans=f.lastIndexOf('.')
    let con=f.slice(ans+1);
    // console.log(con)
     if(con=='jpg'|| con=='png' || con=='jpeg' || con=='svg'){
      return null;
     }
    else{
      return {ch:true}
     }
  }

    return null;
};
image:any=''

  val= new FormGroup({
    name:new FormControl(null,[Validators.required]),
    price:new FormControl(null,[Validators.required]),
    description:new FormControl(null,[Validators.required]),
    image:new FormControl(null,[Validators.required,this.ch]),
    check:new FormControl(null)
});

onimageselect(event:any){
  let files:any = event.target.files[0];
  console.log(files)
  if(files){
  let reader = new FileReader();
  reader.onload=(e:any)=>{
    // this.image=e.target.results
    console.log(e.target.result)
    this.image=e.target.result
  };
  reader.readAsDataURL(files);
}
}

  sub(){
    console.log(this.val)
// {...c,[FormControl.name]:this.val.value}
// console.log(this.val.value)
this.val.value.image=this.image
// console.log(this.val.value)
let g=JSON.parse(localStorage.getItem('data') as string)



if(g){
  for(let i=0;i<g.length;i++){
  if(this.val.value.name==g[i].name){
    g[i]=this.val.value;
    localStorage.setItem('data',JSON.stringify(g))
    return;
  }
}
  g.push(this.val.value)
  localStorage.setItem('data',JSON.stringify(g))
}
else{
let empty=[]
empty.push(this.val.value)
localStorage.setItem('data',JSON.stringify(empty))
}
  // this.sign.toggle=1
  this.Views.emit();


}

ctl(){
  // this.sign.toggle=1
  this.Views.emit();
}
}




