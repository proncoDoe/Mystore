import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  @Output() confirmationSuccess: EventEmitter<string> = new EventEmitter();

  firstName: string='';
  address: string='';
  creditCard: number | string = '';

  constructor() { }

  ngOnInit(): void {
  }




  onSubmit(form: NgForm): void {

    if(form.valid){

    this.confirmationSuccess.emit(this.firstName);
  }

}

}
