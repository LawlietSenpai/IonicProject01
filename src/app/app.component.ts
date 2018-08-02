import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';

import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC8DHC72YEcwqY575mS3_BsCViN73eo0ns",
    authDomain: "ionicchat-abc005.firebaseapp.com",
    databaseURL: "https://ionicchat-abc005.firebaseio.com",
    projectId: "ionicchat-abc005",
    storageBucket: "ionicchat-abc005.appspot.com",
    messagingSenderId: "603143759208"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
