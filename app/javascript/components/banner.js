import Typed from 'typed.js';

const loadDynamicBannerText = () => {
 new Typed('#banner-typed-text', {
   strings: ["Life is short", "Drink more"],
   typeSpeed: 50,
   loop: true
 });
}

export { loadDynamicBannerText };
