import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {async} from '@angular/core/testing';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  liste = [];
  constructor(private alert: AlertController) {}
  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Hata',
      message: 'Lütfen boş bırakmayın',
      buttons: ['OK']
    });
    await alert.present();
  }
  addFilm(name: string, rate: string) {
    if (name.length <= 0 || rate.length <= 0) {
      this.presentAlert().then(r => {});
    } else {
      this.liste.push(name + ' ' + rate + '/10');
    }
  }
}
