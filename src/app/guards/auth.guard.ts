import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from '../store/auth.store';

export const authGuard: CanActivateFn = (route, state) => {
  const authStore = inject(AuthStore);

  if (!authStore.getToken()) {
    const router = inject(Router);
    router.navigate(['login']);
    return false;
  }

  return true;
};
