import Page from './Page';
import { ThemeProvider } from './ThemeProvider';

function Theme() {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
}

export default Theme;
