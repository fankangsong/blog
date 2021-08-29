/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const DEV_HOST = [
  'localhost',
  'myblog.com',
  'mublog.dev'
]

export const onClientEntry = () => {
  window.onload = () => {
    const { Aegis } = window;
    const { hostname } = window.location;
    const isDevEnv = DEV_HOST.some(url => hostname.includes(url));

    if (isDevEnv || !Aegis) return;

    window.aegis = new Aegis({
      id: 'PVqyZlB0G1zEMGvOwE', // 应用ID，即上报key
      reportApiSpeed: true, // 接口测速
      reportAssetSpeed: true, // 静态资源测速
      spa: true // spa 应用页面跳转的时候开启 pv 计算
    });
  }
}