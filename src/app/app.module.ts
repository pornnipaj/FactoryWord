import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, FirestoreSettingsToken } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { HomePage } from './home/home.page';
import { EditVocabPage } from './edit-vocab/edit-vocab.page';
import { CreateVocabPage } from './create-vocab/create-vocab.page';
import { DetailPage } from './detail/detail.page';

import { EditVocabResolver } from './edit-vocab/edit-vocab.resolver';
import { FirebaseService } from './services/firebase.service';
import { DetailResolver } from './detail/detail.resolver';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomePage, EditVocabPage, CreateVocabPage, DetailPage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, FormsModule,
    ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseService, EditVocabResolver, DetailResolver,
    { provide: FirestoreSettingsToken, useValue: {} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
