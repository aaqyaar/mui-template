import { forwardRef, ReactNode } from 'react';
import { IconButton } from '@mui/material';
import { ButtonAnimate } from '../animate';

interface IMIconButtonProps {
  children: ReactNode;
}

const MIconButton = forwardRef(
  ({ children, ...other }: IMIconButtonProps, ref) => (
    <ButtonAnimate>
      {/* @ts-ignore */}
      <IconButton ref={ref} {...other}>
        {children}
      </IconButton>
    </ButtonAnimate>
  )
);

export default MIconButton;
