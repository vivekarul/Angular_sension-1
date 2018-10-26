import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   myjson:any ={name:"Guhan",age:27} //object

  college:any ={    //object
              sem1:[
                       {name:"Raja",tamil:56,eng:67},
                       {name:"anbu",tamil:67,eng:87}

              ],
              sem2:[
                {name:"Rohit",tamil:56,eng:67},
                {name:"mani",tamil:67,eng:87}
              ]
   }






}
