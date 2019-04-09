import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) { }


  getName(id) {
    return this.db.collection('vocabs').doc(id).snapshotChanges();
  }

  updateName(id, value) {
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('vocabs').doc(id).set(value);
  }

  deleteName(id) {
    return this.db.collection('vocabs').doc(id).delete();
  }

  getNames() {
    return this.db.collection('vocabs').snapshotChanges();
  }

  searchnames(searchValue) {
    return this.db.collection('vocabs', ref => ref.where('name', '>=', searchValue)
      .where('name', '<=', searchValue + '\uf8ff'))
      .snapshotChanges();
  }

  searchNamesBychinese(value) {
    return this.db.collection('vocabs', ref => ref.orderBy('chinese').startAt(value)).snapshotChanges();
  }


  createName(value) {
    return this.db.collection('vocabs').add({
      name: value.name,
      chinese: value.chinese,
      pinin: value.pinin,
      spell: value.spell,
      sentense: value.sentense
    });
  }
}
