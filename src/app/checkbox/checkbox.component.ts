import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, FormArray} from '@angular/forms';


export interface Box {
  name: string,
  status: boolean
}
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
 checkBoxArr: any[]=[{id:1,name:'box1', status:true}, {id:2,name:'box2', status:false}];
 formBox: FormGroup; 
 checkBoxes: FormArray;
 constructor(private fb: FormBuilder) {
     this.formBox= this.fb.group({
       checkBoxes: this.fb.array([])
     }) 
   }

  ngOnInit() {
    for(let i=0;i<this.checkBoxArr.length;i++){
      this.addItem(this.checkBoxArr[i].status)
    }
  }

  addItem(item) {
    this.checkBoxes=this.formBox.get('checkBoxes') as FormArray
    this.checkBoxes.push(this.fb.control(item));
 }

 onSubmit(){
   const selectedShoppingItem = this.checkBoxes; 
    console.log('selectedShoppingItem',selectedShoppingItem);
    for(let i=0;i<this.checkBoxArr.length;i++){
      this.checkBoxArr[i]['status']=this.checkBoxes['value'][i];
    }
    console.log('val',this.checkBoxes['value'][1]);
    console.log('checkBoxArr',this.checkBoxArr);
}
   
}