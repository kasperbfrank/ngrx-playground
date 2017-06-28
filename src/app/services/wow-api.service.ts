import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/rx';

import { Mount } from '../models/Mount';

const API_URL = 'https://us.api.battle.net/wow';
const LOCALE = 'en_US';
const API_KEY = '5t6uf64pjq7tuvbue8t2q33r6vu9dn8y';

@Injectable()
export class WowApiService {

  constructor(private http: Http) { }

  getMounts(): Observable<Mount[]> {
    return this.http.get(this.createUrl('mount'))
                    .map(this.handleResponse.bind(this))
                    .map(res => res['mounts']);
  }

  private createUrl(path: string): string {
    return `${API_URL}/${path}/?locale=${LOCALE}&apikey=${API_KEY}`;
  }

  private handleResponse(res: Response): any {
    return res.json ? res.json() : res;
  }

}
