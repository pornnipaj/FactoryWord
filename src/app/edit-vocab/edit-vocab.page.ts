import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-vocab',
  templateUrl: './edit-vocab.page.html',
  styleUrls: ['./edit-vocab.page.scss'],
})
export class EditVocabPage implements OnInit {

  exampleForm: FormGroup;
  item: any;

  constructor(
    public firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    public alertController: AlertController,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      const data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.createForm();
      }
    });
  }

  createForm() {
    this.exampleForm = this.fb.group({
      name: [this.item.name, Validators.required],
      chinese: [this.item.chinese, Validators.required],
      pinin: [this.item.pinin, Validators.required],
      spell: [this.item.spell, Validators.required],
      sentense: [this.item.sentense, Validators.required],
    });
  }

  onSubmit(value) {
    this.firebaseService.updateName(this.item.id, value)
      .then(
        res => {
          this.router.navigate(['']);
        }
      );
  }
  cancel() {
    this.router.navigate(['']);
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm delete',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          handler: () => {
            this.firebaseService.deleteName(this.item.id)
              .then(
                res => {
                  this.router.navigate(['']);
                },
                err => {
                  console.log(err);
                }
              );
          }
        }
      ]
    });

    await alert.present();
  }
}

