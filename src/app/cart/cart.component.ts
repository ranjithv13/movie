import { Component } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
    Signup=true;
  List=false;
  title = 'task';
  i=''
   showSignup(){
      this.Signup=true;
      this.List=false;
    }
    showList(){
      this.Signup=false;
      this.List=true;
    }

  OnInit(){

  }
  constructor(){
    let i =JSON.parse(localStorage.getItem('data') as string);
    if(i!=null){
      this.showList()

    }else{

      this.showSignup()
    }


  }




}


