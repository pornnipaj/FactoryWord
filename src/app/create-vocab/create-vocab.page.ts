import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-vocab',
  templateUrl: './create-vocab.page.html',
  styleUrls: ['./create-vocab.page.scss'],
})
export class CreateVocabPage implements OnInit {
  exampleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public firebaseService: FirebaseService,
    public modalController: ModalController
  ) { }
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.fb.group({
      name: ['', Validators.required],
      chinese: ['', Validators.required],
      pinin: ['', Validators.required],
      spell: ['', Validators.required],
      sentense: ['', Validators.required],
    });
  }

  resetFields() {
    this.exampleForm = this.fb.group({
      name: new FormControl('', Validators.required),
      chinese: new FormControl('', Validators.required),
      pinin: new FormControl('', Validators.required),
      spell: new FormControl('', Validators.required),
      sentense: new FormControl('', Validators.required)
    });
  }

  onSubmit(value) {
    this.firebaseService.createName(value)
      .then(
        res => {
          this.resetFields();
          this.router.navigate(['/home/']);
        }
      );
      this.router.navigate(['/home/']);
  }

}
