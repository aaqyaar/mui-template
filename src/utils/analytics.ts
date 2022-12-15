import { googleAnalyticsConfig } from 'config';

// ----------------------------------------------------------------------

const setup = (...args: any) => {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  // if (!window.gtaq) {
  //   return;
  // }
  // window.gtaq(...args);
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
