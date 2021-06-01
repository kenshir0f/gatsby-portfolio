import React from 'react'
export { wrapRootElement } from './src/utils/wrap-root-element'

export function onRenderBody({ setPostBodyComponents }, pluginOptions) {
  const renderHtml = function renderHtml() {
    return `
      if(true) {
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer && window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-3CNBSJZQ0L', {"send_page_view":true});
      }
      `
  }

  return setPostBodyComponents([
    React.createElement('script', {
      key: 'gatsby-plugin-google-gtag',
      async: true,
      src:
        'https://www.googletagmanager.com/gtag/js?id=' +
        `G-3CNBSJZQ0L`,
    }),
    React.createElement('script', {
      key: 'gatsby-plugin-google-gtag-config',
      dangerouslySetInnerHTML: {
        __html: renderHtml(),
      },
    }),
  ])
}
