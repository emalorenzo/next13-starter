import '@/styles/globals.css';

import { MainLayout } from '@/layouts';
import StyledComponentsRegistry from '@/lib/registry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <MainLayout>{children}</MainLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
