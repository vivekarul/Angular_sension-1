import{Injectable} from '@angular/core';

@Injectable()

export class AppService{


    test()
    {
        return "Welcome to angular";
    }

    send()
    {
        return 100;
    }


}