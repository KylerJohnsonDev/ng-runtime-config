import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { AppConfig } from './app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  config: AppConfig;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.config = this.configService.readConfig();
  }
}
