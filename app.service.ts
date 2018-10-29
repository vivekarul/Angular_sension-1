import{Injectable} from '@angular/core';
import{Http} from'@angular/http';
import'rxjs/add/operator/map';

@Injectable()

export class AppService{


     constructor(private obj:Http)
     {
       
     }
    send()
    {
        return this.obj.get("https://jsonplaceholder.typicode.com/users").map(response=>response.json());
    }


}