import { Component, OnInit, Injector, OnDestroy } from '@angular/core';

import { BaseComponent } from 'src/app/shared/base-component';
import { InstagramUser } from 'src/app/shared/support-class';

declare var $: any;
@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent extends BaseComponent implements OnInit, OnDestroy {

  userInfo: InstagramUser;
  posts: any[] = [];
  selectedPost: any;
  error = false;
  masonryCount = 0;
  updateMasonryLayout = false;

  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  ngOnInit() {
    this.angulartics.eventTrack('social', { category: 'enterPage' });
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
    this.angulartics.eventTrack('social', { category: 'exitPage' });
    this.unsubscribe();
  }

  goToInstagram() {
    this.angulartics.eventTrack('social', { category: 'goToInstagramAccount' });
    window.open(`https://www.instagram.com/${this.userInfo.username}`);
  }

  goToPostExternal(post: any) {
    this.angulartics.eventTrack('social', { category: 'goToInstagramPost' });
    window.open(`${post.link}`);
  }

  showModal(post) {
    this.selectedPost = post;
    this.cdRef.detectChanges();
    $(`#modal-post`).appendTo('body').modal('show');
    $('#modal-post').on('hidden.bs.modal', () => {
      this.selectedPost = null;
      this.cdRef.detectChanges();
    });
  }

  createMarker(location) {
    return [{
      name: location.name,
      latitude: location.latitude,
      longitude: location.longitude
    }];
  }

}
