import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    city:String ="Chennai";
    
    mobile:number=1122;

    data:any =["Raja","Guhan", "Anbu", "Kamal",78678,"kesav"];//array

   // One way
    getValue:string;
    check(x:string)
    {
       this.getValue=x;
    }

    //Attribute binding
    imageUrl:any="assets/images/swiggy-2.jpg";

    getImage()
    {
      this.imageUrl="assets/images/facebook.JPG";
    }

     myid:any="p1";

     myclass:any="c1";







}
