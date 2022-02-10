import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomerbarComponent} from "./navigation/header/customerbar.component";
import {MainMenuComponent} from "./navigation/header/main-menu.component";
import {VideoComponent} from "./pages/index/video.component";
import {BottomNavBarComponent} from "./navigation/footer/bottomnavbar.component";
import {CarouselComponent} from "./pages/index/carousel.component";


@NgModule({
  declarations: [
    AppComponent,
    CustomerbarComponent,
    MainMenuComponent,
    VideoComponent,
    CarouselComponent,
    BottomNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
