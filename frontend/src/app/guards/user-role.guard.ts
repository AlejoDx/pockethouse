import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../pages/services/auth.service';

export const USerRoleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.user.authorities==="ROLE_USER") {
    return true;
  }
  router.navigateByUrl('/auth/login');
  return false;


};
