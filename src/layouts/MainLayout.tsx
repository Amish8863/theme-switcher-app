import { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <main className="p-4 pt-10 sm:p-6 md:p-8 max-w-5xl mx-auto">
      {children}
    </main>
  );
};

export default MainLayout;
