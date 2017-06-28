import { createSelector } from 'reselect';
import { Mount } from '../../models/Mount';
import * as mount from './mount.actions';


export interface State {
  loaded: boolean;
  loading: boolean;
  ids: number[];
  entities: { [id: number]: Mount };
  selectedId: number | null;
}

const initialState: State = {
  loaded: false,
  loading: false,
  ids: [],
  entities: {},
  selectedId: null
}

export function reducer(state = initialState, action: mount.Actions): State {
  switch (action.type) {
    case mount.LOAD_COLLECTION:
      return Object.assign({}, state, {
        loading: true
      });

    case mount.LOAD_COLLECTION_SUCCESS:
      const mounts = action.payload;

      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        ids: mounts.map(mount => mount.creatureId),
        entities: mounts.reduce((acc: any, curr: Mount) =>
          Object.assign(acc, { [curr.creatureId]: curr }), { })
      });

    case mount.LOAD_COLLECTION_FAIL:
      return Object.assign({}, state, {
        loading: false
      });

    default:
      return state;
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getIds = (state: State) => state.ids;
export const getEntities = (state: State) => state.entities;
export const getSelectedId = (state: State) => state.selectedId;

export const getAll = createSelector(
  getEntities,
  getIds,
  (entities, ids) => ids.map(id => entities[id])
);

export const getSelected = createSelector(
  getEntities,
  getSelectedId,
  (entities, selectedId) => entities[selectedId]
);
