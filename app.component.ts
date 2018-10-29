import { Component } from '@angular/core';
import{AppService} from'./app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data:any;
  mark:any;
   constructor(private obj:AppService)
   {

   }
   
   ngOnInit()
   {
     this.data = this.obj.test();
     this.mark=this.obj.send();
   }

}
