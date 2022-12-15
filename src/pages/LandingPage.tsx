// material
import { styled } from '@mui/material/styles';
// components
import Page from 'components/Page';
import {
  LandingHero,
  LandingDarkMode,
  LandingThemeColor,
  LandingAdvertisement,
  LandingCleanInterfaces,
} from 'sections/landing';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%',
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle title="Admin Dashboard for Next Projects | Abdi Zamed Mohamed">
      <LandingHero />

      <ContentStyle>
        <LandingDarkMode />
        <LandingThemeColor />
        <LandingCleanInterfaces />
        <LandingAdvertisement />
      </ContentStyle>
    </RootStyle>
  );
}
