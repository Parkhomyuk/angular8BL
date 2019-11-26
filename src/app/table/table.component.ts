import { Component, OnInit } from '@angular/core';
import {ReservationsService} from '../services/reservations.service';
import {FormBuilder, FormGroup, FormArray, FormControl} from '@angular/forms';
interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

 

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  reservationForm: FormGroup
  reservations: any[];
  reservationsHeaders: any[];
  constructor(private reservationsService: ReservationsService, private formBuilder: FormBuilder) { 
    this.reservationForm=this.formBuilder.group({
      addDynamicElement: this.formBuilder.array([])
    });
  }

  ngOnInit() {
    this.reservationsService. getReservations().subscribe(
      data=> {
          this.reservations= data['reservations'];
          this.reservationsHeaders= Object.keys(this.reservations[0]);
          console.log({'data': this.reservations, 'data2': this.reservationsHeaders});
          
          for(let i=0;i<this.reservationsHeaders.length;i++){
            const control = new FormControl(this.reservationsHeaders[i]);
            this.addDynamicElement.push(this.formBuilder.control(control))
          }
          console.log('res', this.addDynamicElement)
          
      }
    )
  }
  get addDynamicElement() {
    return this.reservationForm.get('addDynamicElement') as FormArray
  }

}
