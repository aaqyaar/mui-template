import { googleAnalyticsConfig } from 'config';

// window and gtaq is not defined in the server side
// so we need to check if it is defined before using it

const setup = (...args: any) => {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  if (typeof window !== 'undefined') {
    // @ts-ignore
    if (window.gtag) {
      // @ts-ignore
      window.gtag(...args);
    }
  }
};

const track = {
  pageview: (props: any) => {
    setup('config', googleAnalyticsConfig, props);
  },
  event: (type: any, props: any) => {
    setup('event', type, props);
  },
};

export default track;
