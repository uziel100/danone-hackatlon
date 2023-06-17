/* eslint-disable @typescript-eslint/ban-types */
import type { FC, ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
import { createEmotionCache, useApollo } from '@/utils/index';
import Router from 'next/router';
import NProgress from 'nprogress';
import { ApolloProvider } from '@apollo/client';

// date picker
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import esLocale from 'date-fns/locale/es';

import { ThemeContextProvider } from '@/context/theme/ThemeContextProvider';
import { EmotionCache } from '@emotion/cache';

import '@/components/styles/styles.global.css';

const clientSideEmotionCache = createEmotionCache();

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type WebAppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache: EmotionCache;
};

const WebApp: FC<WebAppPropsWithLayout> = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => {
  const apolloClient = useApollo(pageProps);

  const getLayout = Component.getLayout || (page => page);

  return (
    <>
      <Head>
        <title>Danone</title>
      </Head>
      <ApolloProvider client={apolloClient}>
        <ThemeContextProvider emotionCache={emotionCache}>
          <SnackbarProvider maxSnack={3}>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              adapterLocale={esLocale}
              localeText={{
                okButtonLabel: 'Aceptar',
                cancelButtonLabel: 'Cerrar'
              }}
            >
              {getLayout(<Component {...pageProps} />)}
            </LocalizationProvider>
          </SnackbarProvider>
        </ThemeContextProvider>
      </ApolloProvider>
    </>
  );
};

export default WebApp;
