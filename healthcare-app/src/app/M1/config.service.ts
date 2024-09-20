import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  public config: any;

  setConfig(config: any) {
    this.config = config;
  }
}
