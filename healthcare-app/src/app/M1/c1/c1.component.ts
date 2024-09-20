import { Component } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.scss'
})
export class C1Component  {
  public config: any = null;

  constructor(private configService: ConfigService) {}

  ngOnInit() {

    this.config = this.configService.config;
  }
}

