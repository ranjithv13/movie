import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  value='';
  pass='';
  user='';
  password='';
  cpass='';
  val:string[]=[];
  d='';
  responses: { [key: string]: string } = {
    'hello': 'Hi! How can I help you?',
    'hi': 'Hello! What\'s on your mind?',
    'how are you': 'I\'m doing great, thanks! How about you?',
    'default': 'I didn\'t understand that. Can you please rephrase?'
  };

  dal(){
    if(this.d){
      this.val.push(this.d)
       const response = this.getResponse(this.d.toLowerCase());
    this.val.push(response);
      this.d='';
    }

  }
   getResponse(input: string): string {
    for (const key in this.responses) {
      if (input.includes(key)) {
        return this.responses[key];
      }
    }
    return this.responses['default'];
  }


  submit(){
    let b=JSON.parse( localStorage.getItem('login') as string);
    if(this.user.length==0 || this.password.length==0 ||this.cpass.length==0){
      alert('Required all field');
      return;
    }
    else{
      for(let i=0;i<b.length;i++){
        if(this.user==b[i].user){
          alert('E-mail id or phone number already exit');
          return;
        }

      }
      if(this.password==this.cpass){
        let c={
          user:this.user,
          pass:this.password
        }
        b.push(c);
        localStorage.setItem('login',JSON.stringify(b));
        alert('Signup successfully');
      }
      else{
        alert("Password should be same")
      }
    }
  }

  sub(){
    let a=JSON.parse(localStorage.getItem('login') as string);
    if(this.value.length==0 || this.pass.length==0){
      alert('required all field');
    }
    else{
      for(let i=0;i<a.length;i++){
        if(this.value==a[i].user){
          if(this.pass==a[i].pass){
            alert('login successfully');
            return;
          }
          else{
            alert('enter correct password');
            return;
          }
        }
      }
      alert('invalid username');
    }
  }

}

