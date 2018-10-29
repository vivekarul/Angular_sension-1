import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   search:any={name:"", tamil:"", eng:""}

  college:any ={    
    sem1:[
             {name:"Raja",tamil:56,eng:67},
             {name:"Anbu",tamil:67,eng:87},
             {name:"Rajesh",tamil:86,eng:54},
             {name:"Vimal",tamil:67,eng:34}

    ],
    sem2:[
      {name:"Rohit",tamil:56,eng:67},
      {name:"mani",tamil:67,eng:87}
    ]
  }
  //https://www.npmjs.com/package/ngx-filter-pipe
}
