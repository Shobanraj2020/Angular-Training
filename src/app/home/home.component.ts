import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private route:ActivatedRoute, private http:HttpClient) { }
 
tableValues:any=[];

  ngOnInit(): void {
    let data= this.route.snapshot.paramMap.get('id');
    if(data=="hello"){
      this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((data)=>{
      console.log(data);
      this.tableValues = data;
      console.log(data);
    })

    }else{
      console.log("hellowww");
    }
    
    
        
     
}
getValues(){

 
}



}
// https://jsonplaceholder.typicode.com/todos
