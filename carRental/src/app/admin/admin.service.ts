import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  isAdminAuth=false;
  constructor() { }

  login(){this.isAdminAuth=true;}

  logout(){this.isAdminAuth=false;}
}
