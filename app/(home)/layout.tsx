import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ermerson Rafael | Engenharia, carreira e tecnologia',
  // icons: 
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return children;
}
