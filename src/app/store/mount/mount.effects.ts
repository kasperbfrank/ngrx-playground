import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { routerActions } from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import * as mount from './mount.actions';
import { Mount } from '../../models/Mount';

import { MountService } from '../../services/mount.service';

@Injectable()
export class MountEffects {
  @Effect() route$: Observable<Action> = this.actions$
    .ofType(routerActions.UPDATE_LOCATION)
    .filter(action => action.payload.path === '/mounts')
    .do(() => console.log('mounts route'))
    .switchMap(() => of(new mount.LoadMountCollectionAction()));

  @Effect() loadCollection$: Observable<Action> = this.actions$
    .ofType(mount.LOAD_COLLECTION)
    .switchMap(() => this.mountService.getAll()
      .map(mounts => new mount.LoadMountCollectionSuccessAction(mounts)))
      .catch(err => of(new mount.LoadMountCollectionFailAction(err)))

  constructor(
    private actions$: Actions,
    private mountService: MountService
  ) { }
}
