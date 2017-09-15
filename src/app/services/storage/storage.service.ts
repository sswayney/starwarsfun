import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-store';

@Injectable()
export class StorageService {

  constructor(private localStorageService: LocalStorageService) { }

}
