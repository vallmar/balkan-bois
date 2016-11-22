import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: '/Templates/startPage.html',
})
export class AppComponent {
    name: string;
    brand: string;
    kings: string[] = ["Gustav Wasa", "Carl XII", "Carl XVI"];

    test(): void {
        this.kings.push("Erik XIV");
    };

    //groda(): void{
    //    Get: {
    //        url: 'https://balkan.file.core.windows.net/?comp=list',
    //        headers: {
    //            'x-ms-version': '2014-02-14',
    //            'x-ms-date': 'Mon, 27 Jan 2014 22:41:55 GMT',
    //            'Content-Type': 'text/plain; charset=UTF-8',
    //            'x-ms-content-length': '1024',
    //            'Authorization': 'SharedKey myaccount:YhuFJjN4fAR8/AmBrqBz7MG2uFinQ4rkh4dscbj598g=';
    //        }
    //    }
    //}


}