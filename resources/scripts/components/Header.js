import Component from '@scripts/components/Component';
export default class Header extends Component {
  constructor() {
    super();
    this.header = document.querySelector('header');
    this.showButton = document.getElementById('header-mobile-menu-toggle');
    this.mobileMenuWrapper = document.querySelector('header .mobile-nav');

    this.footerMenu  = document.querySelectorAll('.footer__menu .menu-item-has-children');

    this.mobileSubMenusParent = document.querySelectorAll('header .mobile-nav .menu-item-has-children')


    this.state = {
      open: false,
      title: '',
      is_scrolled: 0,
    };
  }

  init() {
    if (!this.header) {
      return;
    }

    window.addEventListener("scroll", () => {
      var scroll = window.pageYOffset;
      if (scroll >= 1) {
        this.header.classList.add("fixed");
      } else {
        this.header.classList.remove("fixed");
      }
    });

    if(window.innerWidth < 768){
      this.footerMenu.forEach(item => {
        item.querySelector('a').addEventListener('click', (e) =>{
          e.preventDefault();
          const sublist = item.querySelector('ul');
          this.toggleClass(sublist);
        })
      });
    }

    this.toggleMenu();
    this.toggleSubMenu();
  }


  toggleMenu(){
    this.showButton.addEventListener('click', () =>{
      this.toggleClass(this.mobileMenuWrapper)
    })
    this.header = document.querySelector(".header");

  }

  toggleSubMenu(){

    this.mobileSubMenusParent.forEach(submenu => {
      submenu.querySelector('a').addEventListener('click', (e) =>{
        e.preventDefault();
        const sublist = submenu.querySelector('ul');
        this.toggleClass(sublist);
      })
    });
  }

  toggleClass(element) {

    if(element.classList.contains('show')){
      element.classList.remove('show');
    }else{
      element.classList.add('show')
    }

  }

}