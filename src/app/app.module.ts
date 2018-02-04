import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

//Import Calendar
import { CalendarModule } from 'angular-calendar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DemoUtilsModule } from './demo-utils/module';

//Import Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoutes: Routes = [
	{path: '', component: AppComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CalendarModule.forRoot(),
    NgbModule.forRoot(),
    DemoUtilsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
