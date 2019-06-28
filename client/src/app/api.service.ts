import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/**
 * Study points
 * Why service still work even when @Injectable not used
 * Link : https://blog.ninja-squad.com/2016/12/08/angular-injectable/
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
}
