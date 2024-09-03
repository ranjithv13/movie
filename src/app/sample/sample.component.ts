import { trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent {

  myForm: FormGroup;

  constructor(private dat:FormBuilder){
  this.myForm=this.dat.group({

    season:this.dat.array([this.create()])
  })
  }

  create(){
    return this.dat.group({
      sno:[1,Validators.required],
      epi:this.dat.array([this.createinside()])
    })
  }

  createinside(){
    return this.dat.group({
      ename:['',Validators.required],
      eno:['',Validators.required]
    })
  }

  get valinside(){
    let sent:any=([]);

    for(let i=0;i<this.val.length;i++){
      sent.push(this.val.at(i).get('epi') as FormArray)
    }
    return sent;
  }

  get val(){
    return this.myForm.get('season') as FormArray;
  }

  addinside(i:any){
    this.valinside.at(i).push(this.createinside())
    console.log(this.addinside(i))
  }

  add(){
    this.val.push(this.create())
  }

  onSubmit(){
    // console.log(this.inside)
    console.log(this.myForm.value)
  }
}


// dynamicForm: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.dynamicForm = this.fb.group({
//       numberOfInputs: [null, [Validators.required, Validators.min(1)]], // Control for entering number
//       inputsArray: this.fb.array([]) // FormArray for dynamic inputs
//     });

//     // Subscribe to the numberOfInputs control's value changes
//     this.dynamicForm.get('numberOfInputs')?.valueChanges.subscribe(value => {
//       this.setInputs(value);
//     });
//   }



//   // Getter for the FormArray
//   get inputsArray(): FormArray {
//     return this.dynamicForm.get('inputsArray') as FormArray;
//   }

//   // Method to create input fields dynamically
//   setInputs(count: number): void {
//     this.inputsArray.clear(); // Clear the existing array

//     for (let i = 0; i < count; i++) {
//       this.inputsArray.push(this.fb.control('', Validators.required));
//     }
//   }

//   // Optional: Method to handle form submission
//   onSubmit(): void {
//     if (this.dynamicForm.valid) {
//       console.log(this.dynamicForm.value);
//     }


//   }



// dynamicForm: FormGroup;

//   constructor(private fb: FormBuilder) {
//       this.dynamicForm = this.fb.group({
//       number: [null, [Validators.required, Validators.min(1)]], // Control for entering number
//       inputsArray: this.fb.array([]) // FormArray for dynamic inputs
//     });

//     // Subscribe to the numberOfInputs control's value changes
//     this.dynamicForm.get('numberOfInputs')?.valueChanges.subscribe(value => {
//       this.adjustInputs(value);
//     });
//   }
//  create(){
//   return
//  }

//   // Getter for the FormArray
//   get inputsArray(): FormArray {
//     return this.dynamicForm.get('inputsArray') as FormArray;
//   }

//   // Method to adjust the number of input fields while preserving existing data
//   adjustInputs(count: number): void {
//     const currentCount = this.inputsArray.length;

//     if (count > currentCount) {
//       // Add controls if count increases
//       for (let i = currentCount; i < count; i++) {
//         this.inputsArray.push(this.fb.control('', Validators.required));
//       }
//     } else if (count < currentCount) {
//       // Remove controls if count decreases
//       for (let i = currentCount - 1; i >= count; i--) {
//         this.inputsArray.removeAt(i);
//       }
//     }
//   }
//    // Optional: Method to handle form submission
//   onSubmit(): void {
//     if (this.dynamicForm.valid) {
//       console.log(this.dynamicForm.value);
//     }
//   }

// }
