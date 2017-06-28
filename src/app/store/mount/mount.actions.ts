import { Action } from '@ngrx/store';
import { Mount } from '../../models/Mount';


export const LOAD_COLLECTION =          '[Mount] Load Collection';
export const LOAD_COLLECTION_SUCCESS =  '[Mount] Load Collection Success';
export const LOAD_COLLECTION_FAIL =     '[Mount] Load Collection fail';

/**
 * Load Mount Collection Actions
 */
export class LoadMountCollectionAction implements Action {
  readonly type = LOAD_COLLECTION;
}

export class LoadMountCollectionSuccessAction implements Action {
  readonly type = LOAD_COLLECTION_SUCCESS;

  constructor(public payload: Mount[]) { }
}

export class LoadMountCollectionFailAction implements Action {
  readonly type = LOAD_COLLECTION_FAIL;

  constructor(public payload: any) { }
}


export type Actions
  = LoadMountCollectionAction
  | LoadMountCollectionSuccessAction
  | LoadMountCollectionFailAction;
