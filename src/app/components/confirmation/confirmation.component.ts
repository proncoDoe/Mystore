import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  firstName: string | null = '';
  totalPrice: number | null = 0;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.firstName = params.get('firstName');
      this.totalPrice = Number(params.get('totalPrice'));
    })
  }

}
