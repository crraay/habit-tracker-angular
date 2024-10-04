import { Injectable } from '@angular/core';
import { createStore, Store, withProps } from '@ngneat/elf';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';

export interface AuthProps {
  username: string;
  token: string;
  tokenExpiresIn: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthStore {

  private readonly authStore: Store;

  constructor() {
    this.authStore = createStore(
      { name: 'ht_auth'},
      withProps<AuthProps>({
        username: null,
        token: null,
        tokenExpiresIn: 0
      })
    );

    persistState(this.authStore, {
      key: 'ht_auth',
      storage: localStorageStrategy
    });
  }

  setData(props: Partial<AuthProps>): void {
    this.authStore.update(state => ({
      ...state,
      ...props
    }));
  }

  getToken(): string {
    return this.authStore.getValue().token;
  }

  clear() {
    this.authStore.update(state => ({
      username: null,
      token: null,
      tokenExpiresIn: 0
    }));
  }
}
