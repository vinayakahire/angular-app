import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UNIQUE_CONFIG_KEY } from './UNIQUE_CONFIG_KEY';

@Injectable()
export class ConfigSetterGuard implements CanActivate {
  canActivate(): boolean {

    console.log('Setting config data to localStorage');

    localStorage.setItem(
      UNIQUE_CONFIG_KEY,
      JSON.stringify({ token: 'config-token', currentTime: new Date().toJSON() })
    );
    console.log('Setting config data done');
    return true;
  }
}
