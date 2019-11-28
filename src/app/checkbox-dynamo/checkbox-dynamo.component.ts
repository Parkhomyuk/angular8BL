import { Component, OnInit, OnChanges,  SimpleChanges, DoCheck } from '@angular/core';
import {ReservationsService} from '../services/reservations.service';
import {FormBuilder, FormGroup, FormControl, FormArray} from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
export class Box{
  id: number;
  name: string
  status: boolean;
  constructor(id: number, name: string, status: boolean){
    this.id=id;
    this.name=name;
    this.status=status;
  }
}

@Component({
  selector: 'app-checkbox-dynamo',
  templateUrl: './checkbox-dynamo.component.html',
  styleUrls: ['./checkbox-dynamo.component.scss']
})
export class CheckboxDynamoComponent implements OnInit, OnChanges {
  reservTitle: any[]=[];
  reservTitleObject: {id: number, name: string, status: boolean}[]=[];
  formServ: FormGroup;
  checkBoxes: FormArray;
  reservations: any[];
  openSearch: boolean= false;


  constructor(private reservationsService: ReservationsService, private fb: FormBuilder,  config: NgbModalConfig, private modalService: NgbModal) {
    //noinspection TypeScriptValidateTypes
    config.backdrop = 'static';
    config.keyboard = false;
    this.formServ= this.fb.group({
      boxes: this.fb.array([])
    }
    )
   }

  ngOnInit() {
    this.reservationsService. getReservations().subscribe(
      data=> {
        let reservations= data['reservations'];
        this.reservations=data['reservations'];
        this.reservTitle= Object.keys(data['reservations'][0]);
        console.log('title', this.reservTitle);
        for(let i=0;i<this.reservTitle.length;i++){
          this.reservTitleObject.push(new Box(i,this.reservTitle[i], true));
          this.addBox(true);
        }
        console.log('title Object', this.reservTitleObject);


      }
    )
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }
  ngDoCheck(){
    console.log("DO CHECK");



  }

  addBox(item){

     //noinspection TypeScriptUnresolvedFunction
    this.checkBoxes=this.formServ.get('boxes') as FormArray
     this.checkBoxes.push(this.fb.control(item));
  }

  onSubmit(){
    console.log('form', this.formServ.value.boxes);
    for(let i=0;i<this.reservTitleObject.length;i++){
      this.reservTitleObject[i].status=this.formServ.value.boxes[i];

    }

    console.log('form complite', this.reservTitleObject);
  }
  returnToTable(id){
    for(let i=0;i<this.reservTitleObject.length;i++){
      if(this.reservTitleObject[i].id==id){
        this.reservTitleObject[i].status=true;
        this.checkBoxes[i]=true;

      }

    }


  }

  dropTable(event: CdkDragDrop<Box[]>) {
    //noinspection TypeScriptUnresolvedVariable,TypeScriptValidateTypes
    moveItemInArray(this.reservTitleObject, event.previousIndex, event.currentIndex);
  }

  open(content) {
    this.modalService.open(content, {scrollable: true});
  }
  search(){     
    this.openSearch=!this.openSearch;
  }

}
