import { Injectable } from '@angular/core';
import { AngularFire } from "angularfire2";

@Injectable()
export class ItemsService {

  constructor(private af: AngularFire) {
  }

  getItems() {
    return this.af.database.object('/items/sofa/'
        // {
        // query: {
        //     orderByChild: 'name',
        //     // limitToLast: 1 | 2
        //
        //     }
        // }
    );
  }

  getItem(id: number = 1) {
    id = (id <= 0) ? 1 : id;

    return this.af.database.object('/items/sofa/' + id);
  }

  //@todo - refactor function "getItem"
  //   getItem(elem: number = 1) {
//       let t = this.af.database.object('/items/sofa/'+elem);
//       this.item = this.items.map((_item) => _item.filter((item, index) => index === elem ));
//       console.log(t, this.item);
//
//   // }
//
// }
}
