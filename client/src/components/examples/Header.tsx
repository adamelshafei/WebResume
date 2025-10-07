import { Header } from '../sections/Header';
import { ThemeProvider } from '../ThemeProvider';

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}
