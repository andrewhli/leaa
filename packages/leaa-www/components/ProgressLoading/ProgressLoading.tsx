import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';

interface IProps {
  showAfterMs?: number;
}

export const ProgressLoading = (props: IProps) => {
  let timer: any = null;

  Router.events.on('routeChangeStart', () => {
    clearTimeout(timer);
    timer = setTimeout(NProgress.start, props.showAfterMs || 500);
  });

  Router.events.on('routeChangeComplete', () => {
    clearTimeout(timer);
    NProgress.done();
  });

  Router.events.on('routeChangeError', () => {
    clearTimeout(timer);
    NProgress.done();
  });

  return null;
};
