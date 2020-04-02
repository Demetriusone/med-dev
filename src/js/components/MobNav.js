import { $window, $body, css, Resp } from '../_helpers';
export class MobNav {
  constructor() {
    this.$nav = $('.header__nav');
    this.$navBtn = $('.header__nav-btn');

    this.init();
  }

  init() {
    this.toggleNav();
    this.onResize();
  }

  toggleNav() {
    const _this = this;
    this.$navBtn.on('click tap', function() {
      $(this).toggleClass(css.active);
      $body.toggleClass(css.locked);
      _this.$nav.toggleClass(css.active);
    });
  }
  onResize() {
    $window.on('resize', () => {
      this.$nav.removeClass(css.active);
      this.$navBtn.removeClass(css.active);
      $body.removeClass(css.locked);
    });
  }
}

export default new MobNav();
