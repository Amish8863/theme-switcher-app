import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../redux/store';
import { setOpen, setTheme } from '../features/theme/themeSlice';
import { NavLink } from 'react-router-dom';
import { Home, Info, Menu, Phone, X } from 'lucide-react';

const Header = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  const isOpen = useSelector((state: RootState) => state.theme.open);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTheme(e.target.value as any));
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-blue-600 dark:text-emerald-400' : 'text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
    }`;

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-lg z-50 p-4 flex flex sm:flex-row items-center justify-between px-6 md:px-10 gap-2 sm:gap-0">
      <div className="text-xl font-extrabold tracking-tight text-gray-800 dark:text-white">
        <span className="block sm:hidden">APP</span>
        <span className="hidden sm:block">SWITCH</span>
      </div>

      {currentTheme !== 'theme2' && (
        <nav className="flex gap-4">
          <NavLink to="/" className={navLinkClass}>
            <Home className="w-5 h-5 sm:hidden" />
            <span className="hidden sm:inline">Home</span>
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            <Info className="w-5 h-5 sm:hidden" />
            <span className="hidden sm:inline">About</span>
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            <Phone className="w-5 h-5 sm:hidden" />
            <span className="hidden sm:inline">Contact</span>
          </NavLink>
        </nav>
      )}

      <div className="relative">
        <select
          value={currentTheme}
          onChange={handleThemeChange}
          className="appearance-none rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white py-2 px-4 pr-10 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-400">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

        {currentTheme === 'theme2' && <div className='sm:hidden'>
          {isOpen ? <button onClick={() => dispatch(setOpen(false))}>
              <X className='w-6 h-6' />
          </button> : <button onClick={() => dispatch(setOpen(true))}>
            <Menu className="w-6 h-6" />
          </button>}
        </div>}
    </header>
  );
};

export default Header;
