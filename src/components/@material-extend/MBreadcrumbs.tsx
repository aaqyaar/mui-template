import { last } from 'lodash';
import PropTypes from 'prop-types';
// material
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Box, Link, Breadcrumbs } from '@mui/material';

// ----------------------------------------------------------------------

const Separator = (
  <Box
    component="span"
    sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'text.disabled' }}
  />
);

LinkItem.propTypes = {
  link: PropTypes.object,
};

function LinkItem({
  link,
}: {
  link: {
    href: string;
    name: string;
    icon: any;
  };
}) {
  const { href, name, icon } = link;
  return (
    <Link
      to={href}
      key={name}
      variant="body2"
      component={RouterLink}
      sx={{
        lineHeight: 2,
        display: 'flex',
        alignItems: 'center',
        color: 'text.primary',
        '& > div': { display: 'inherit' },
      }}
    >
      {icon && (
        <Box
          sx={{
            mr: 1,
            '& svg': { width: 20, height: 20 },
          }}
        >
          {icon}
        </Box>
      )}
      {name}
    </Link>
  );
}

MBreadcrumbs.propTypes = {
  links: PropTypes.array.isRequired,
  activeLast: PropTypes.bool,
};

export default function MBreadcrumbs({
  links,
  activeLast = false,
  ...other
}: {
  links?: any[];
  activeLast: boolean;
}) {
  const currentLink = last(links).name;

  const listDefault = links?.map((link: any) => (
    <LinkItem key={link.name} link={link} />
  ));
  const listActiveLast = links?.map((link: any) => (
    <div key={link.name}>
      {link.name !== currentLink ? (
        <LinkItem link={link} />
      ) : (
        <Typography
          variant="body2"
          sx={{
            maxWidth: 260,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            color: 'text.disabled',
            textOverflow: 'ellipsis',
          }}
        >
          {currentLink}
        </Typography>
      )}
    </div>
  ));

  return (
    <Breadcrumbs separator={Separator} {...other}>
      {activeLast ? listDefault : listActiveLast}
    </Breadcrumbs>
  );
}
