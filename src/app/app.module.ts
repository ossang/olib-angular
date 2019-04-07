import { BrowserModule }                      from '@angular/platform-browser';
import { NgModule }                           from '@angular/core';
import { BrowserAnimationsModule }            from '@angular/platform-browser/animations';
import { HttpClientModule }                   from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { APP_BASE_HREF }                      from '@angular/common';
import { NbThemeModule, NbLayoutModule }      from '@nebular/theme';
import { AppComponent }                       from './app.component';
import { AppRoutingModule }                   from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ]
})
export class AppModule { }
