import { useSelector } from 'react-redux';
import { type RootState } from '../redux/store';
import MainLayout from '../layouts/MainLayout';
import SidebarLayout from '../layouts/SidebarLayout';

const Contact = () => {
  const theme = useSelector((state: RootState) => state.theme.currentTheme);
  const Layout = theme === 'theme2' ? SidebarLayout : MainLayout;

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <p className="text-sm mb-6">
        Get in touch with us. Layout adjusts based on the theme.
      </p>
    </Layout>
  );
};

export default Contact;
