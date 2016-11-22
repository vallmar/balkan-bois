import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './component';
import {ContentComponent} from './content.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, ContentComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    test = function () {
        alert("hi");
    }
}
