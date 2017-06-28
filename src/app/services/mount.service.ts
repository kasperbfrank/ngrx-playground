import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/rx';

import { Mount } from '../models/Mount';

import { WowApiService } from './wow-api.service';

@Injectable()
export class MountService {

  constructor(private api: WowApiService) { }

  getAll(): Observable<Mount[]> {
    return this.api.getMounts();
  }

}
