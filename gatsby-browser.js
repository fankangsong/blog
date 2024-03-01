/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const DEV_HOST = ['localhost', 'myblog.com', 'mublog.dev']

export const onClientEntry = () => {
  const { hostname } = window.location;
  if (hostname === 'localhost') return;

  var _hmt = _hmt || [];
  var hm = document.createElement('script');
  hm.src = "https://hm.baidu.com/hm.js?c7ed426d8df2bf6697973aef72869051";
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
}
