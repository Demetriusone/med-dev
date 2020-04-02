import {
  $body,
  $window,
  throttle,
  css,
  Resp, $header, $scrolledElements
} from '../_helpers';

class Header {
	constructor() {
		this.body = document.querySelector('body');
		this.header = document.querySelector('.header');
		this.nav = this.header.querySelector('.nav_header');
		this.navBtn = this.header.querySelector('.nav-btn');
		this.scrollTop = 0;

		this.init();
	}

	init() {
		this.initFix();
		this.initScroll();
		this.bindEvents();
	}

	bindEvents() {
		this.navBtn.addEventListener('click', () => {
      this.beforeOpen();
			this.toggleMenu();
    });
		 this.onResize();
	}

	onResize() {
    window.onresize = () => {
      this.navBtn.classList.remove(css.active);
      this.nav.classList.remove(css.active);
    };
  }

  beforeOpen() {
    this.scrollTop = $window.scrollTop();
    this.scrollTop > 0 ? this.header.classList.add(css.menuActive) : false;
  }

  beforeClose() {
    this.body.classList.remove(css.locked);
    $body.scrollTop(this.scrollTop);
    this.header.classList.remove(css.menuActive);
  }

	toggleMenu() {
			this.navBtn.classList.toggle(css.active);
			this.nav.classList.toggle(css.active);
	}

	initFix() {
		const _this = this;
		const toggleHeaderScroll = throttle(() => {
			toggleHeader();
		}, 0, this);

		function toggleHeader() {

      if (window.pageYOffset > 0) {
				_this.header.classList.add(css.fixed);
			} else {
				_this.header.classList.remove(css.fixed);
			}
		}

		window.addEventListener('scroll', toggleHeaderScroll);
	}

  initScroll() {
		const _this = this;
    const offsetTop = Resp.isDesk ? 100 : 70;
    const $link = $header.find('.nav_header').find('a');

    $link.on('click', function (e) {
      e.preventDefault();
      const el = $(this).attr('href');
      $scrolledElements.animate({scrollTop: $(el).offset().top - offsetTop}, 1500);
      _this.nav.classList.remove(css.active);
      _this.navBtn.classList.remove(css.active);
      return false;
    });
  }
}

export const HeaderAPI = new Header();
