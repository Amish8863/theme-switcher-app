import { useSelector } from 'react-redux';
import { type RootState } from '../redux/store';
import MainLayout from '../layouts/MainLayout';
import SidebarLayout from '../layouts/SidebarLayout';

const About = () => {
  const theme = useSelector((state: RootState) => state.theme.currentTheme);
  const Layout = theme === 'theme2' ? SidebarLayout : MainLayout;

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="text-sm mb-6">
        This is the About page. The layout you're seeing is based on the current theme.
      </p>
    </Layout>
  );
};

export default About;
