import { Component, OnInit, Injector, OnDestroy } from '@angular/core';

import { BaseComponent } from 'src/app/shared/base-component';
import { InstagramUser } from 'src/app/shared/support-class';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent extends BaseComponent implements OnInit, OnDestroy {

  userInfo: InstagramUser;
  posts: any[] = [];
  error = false;

  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  ngOnInit() {
    this.loaderSrv.sendNewLoaderStatus(true);
    this.subscription = this.http.get<any>('/api/v1/social-wall').subscribe(
      res => {
        const response = res.data;
        this.userInfo = response.data[0].user;
        this.posts = response.data;
        this.loaderSrv.sendNewLoaderStatus(false);
      },
      err => {
        this.error = true;
        this.loaderSrv.sendNewLoaderStatus(false);
      }
    );
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  goToInstagram() {
    window.open(`https://www.instagram.com/${this.userInfo.username}`);
  }



}
