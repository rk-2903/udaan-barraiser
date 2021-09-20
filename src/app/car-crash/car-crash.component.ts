import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from './car.service';

@Component({
  selector: 'app-car-crash',
  templateUrl: './car-crash.component.html',
  styleUrls: ['./car-crash.component.css']
})
export class CarCrashComponent implements OnInit {
  listOfCarCrash: any;
  pagableData: any;

  constructor(private carCrashService: CarService, private router: Router) { }

  ngOnInit() {
    this.carCrashService.fetchCrashDetails().subscribe(data => {
      this.listOfCarCrash = data.body;
      // console.log('data ', this.listOfCarCrash);
    });
    this.onClick();
  }

  openDetails(crashDetails: any){
    this.carCrashService.carCrash = crashDetails;
    console.log('car-details', crashDetails);
    this.router.navigate(['carsh-details'])
  }

  onClick( ) {
    // const qury= {
    //   crash_date: carshDate,
    //   vehicle_type_code2: vehicle_type_code2,
    //   offset: offset,
    //   limit: limit
    // }

    const qury= {
      crash_date: "2014-01-21T00:00:00.000",
      vehicle_type_code2: "PASSENGER VEHICLE",
      $offset: 0,
      $limit: 5
    }

    this.carCrashService.paginationrecord(qury).subscribe(res => {
      this.pagableData = res.body;
      console.log('pagable data ', this.pagableData);
    })
  }

}
