import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Injectable()
export class DetailResolver implements Resolve<any> {

    constructor(public firebaseService: FirebaseService) { }

    resolve(route: ActivatedRouteSnapshot, ) {

        return new Promise((resolve, reject) => {
            const NameId = route.paramMap.get('id');
            this.firebaseService.getName(NameId)
                .subscribe(
                    data => {
                        resolve(data);
                    }
                );
        });
    }
}
