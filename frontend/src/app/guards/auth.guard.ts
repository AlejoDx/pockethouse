import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../pages/services/auth.service';
import { tap } from 'rxjs';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

authService.loading=true;


  return authService.validateToken().pipe(tap(isAuth=>{

    if(!isAuth){
      router.navigateByUrl('/auth/login');
      return false;
    }
    authService.loading=false;
    return true;
  }

  ));
};
