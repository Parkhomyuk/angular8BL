import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatInputModule} from '@angular/material/input';
import { 
  MatButtonModule,
   
  MatDatepickerModule
 } from '@angular/material';
import { ReservationsComponent } from './reservations/reservations/reservations.component';
import { TableComponent } from './table/table.component';

import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CheckboxDynamoComponent } from './checkbox-dynamo/checkbox-dynamo.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';



import { TitlePipe } from './pipes/title.pipe';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { FooterComponent } from './main/footer/footer.component';
import { MainPageComponent } from './main/main-page/main-page.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ReservationsComponent,
    TableComponent,
    CheckboxComponent,
    CheckboxDynamoComponent,
    TitlePipe,
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    NgbModule,
    NgxMaterialTimepickerModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    DragDropModule,
    MatInputModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    FontAwesomeModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
