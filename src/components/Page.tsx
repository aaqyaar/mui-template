import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { forwardRef, useEffect, useCallback } from 'react';

import { Box } from '@mui/material';

import track from 'utils/analytics';

const Page = forwardRef(
  (
    {
      children,
      title = '',
      ...other
    }: {
      children: React.ReactNode;
      title: string;
    },
    ref
  ) => {
    const { pathname } = useLocation();

    const sendPageViewEvent = useCallback(() => {
      track.pageview({
        page_path: pathname,
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      sendPageViewEvent();
    }, [sendPageViewEvent]);

    return (
      <Box ref={ref} {...other}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {children}
      </Box>
    );
  }
);

export default Page;
