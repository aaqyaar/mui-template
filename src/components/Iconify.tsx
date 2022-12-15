import { Icon, IconifyIcon } from '@iconify/react';

import { Box } from '@mui/material';

export default function Iconify({
  icon,
  sx,
  ...other
}: {
  icon: IconifyIcon | string;
  sx: any;
}) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
