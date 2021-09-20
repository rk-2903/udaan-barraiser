import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car-crash/car.service';

@Component({
  selector: 'app-carsh-details',
  templateUrl: './carsh-details.component.html',
  styleUrls: ['./carsh-details.component.css']
})
export class CarshDetailsComponent implements OnInit {
  crashDetails: any;

  constructor( private carCrashService: CarService) { 
    
  }

  ngOnInit() {
    this.carCrashService.carCrash$.subscribe(data => {
      this.crashDetails = data;
      console.log('data in crash-> ', data);
    });
  }

}
