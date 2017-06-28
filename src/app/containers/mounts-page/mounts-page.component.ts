import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/';
import * as mount from '../../store/mount/mount.actions';

@Component({
  templateUrl: './mounts-page.component.html',
  styleUrls: ['./mounts-page.component.scss']
})
export class MountsPageComponent {
  mounts$ = this.store.select(fromRoot.getMounts)

  constructor(private store: Store<fromRoot.State>) { }

}
