import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {appWithTranslation} from 'next-i18next'
import NextI18nextConfig from '../next-i18next.config'

function MyApp({Component, pageProps}: AppProps) {
  
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }

  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp, NextI18nextConfig)
