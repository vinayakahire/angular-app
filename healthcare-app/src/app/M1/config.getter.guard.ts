import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ConfigService } from './config.service';
import { UNIQUE_CONFIG_KEY } from '../UNIQUE_CONFIG_KEY';


@Injectable()
export class ConfigGetterGuard implements CanActivate {

  constructor(private configService: ConfigService) {

  }

  canActivate(): boolean {

    const config = JSON.parse(
      localStorage.getItem(UNIQUE_CONFIG_KEY) || '{}'
    );

    console.log('GET CONFIG data from app module', { config });

    this.configService.setConfig({
      token: config?.token,
      currentTime: config?.currentTime ? new Date(config.currentTime) : null,
    });

    return true;
  }

}
