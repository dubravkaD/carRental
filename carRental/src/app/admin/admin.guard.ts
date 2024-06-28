import { inject } from "@angular/core";
import {CanActivateFn, Router} from "@angular/router";
import { AdminService } from "./admin.service";
export const adminGuard:CanActivateFn = (route, state) => {
  const adminService = inject(AdminService);
  const router = inject(Router);
  if(!adminService.isAdminAuth) {
    router.navigateByUrl('/admin-login');
  }
  return adminService.isAdminAuth;
};
