import domReady from '@roots/sage/client/dom-ready';
//import Header from './components/Header';
import 'bootstrap';
/**
 * Application entrypoint
 */
domReady(async () => {
  // const __header = new Header();
  // __header.init();
});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
import.meta.webpackHot?.accept(console.error);
