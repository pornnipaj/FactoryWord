import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-vocab',
  templateUrl: './search-vocab.page.html',
  styleUrls: ['./search-vocab.page.scss'],
})
export class SearchVocabPage implements OnInit {

  ageValue = 0;
  isshowFilter = false;
  searchValue = '';
  items: Array<any>;
  age_filtered_items: Array<any>;
  name_filtered_items: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData();
  }

  showFilter() {
    if (this.isshowFilter) {
      this.isshowFilter = false;
    } else {
      this.isshowFilter = true;
    }
  }

  getData() {
    this.firebaseService.getNames()
      .subscribe(result => {
        this.items = result;
        this.age_filtered_items = result;
        this.name_filtered_items = result;
        console.log(this.items);
      });
  }

  viewDetail(item) {
    this.router.navigate(['/details/' + item.payload.doc.id]);
  }

  capitalizeFirstLetter(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  searchByName() {
    const value = this.searchValue.toLowerCase();
    this.firebaseService.searchnames(value)
      .subscribe(result => {
        this.name_filtered_items = result;
        this.items = this.combineLists(result, this.name_filtered_items);
      });
  }

  rangeChange(event) {
    this.firebaseService.searchnames(event.detail.value)
      .subscribe(result => {
        this.name_filtered_items = result;
        this.items = this.combineLists(result, this.name_filtered_items);
      });
  }

  combineLists(a, b) {
    const result = [];

    a.filter(x => {
      return b.filter(x2 => {
        if (x2.payload.doc.id === x.payload.doc.id) {
          result.push(x2);
        }
      });
    });
    return result;
  }
}
