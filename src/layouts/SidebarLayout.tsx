import { type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../redux/store';
import { setOpen } from '../features/theme/themeSlice';

interface Props {
  children: ReactNode;
}

const SidebarLayout = ({ children }: Props) => {
  // const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.theme.open)

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 rounded transition ${
      isActive ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`;

  return (
    // <div className="flex min-h-screen bg-gray-900 text-white">

    // <aside
    //     className="w-64 bg-gray-800 text-white p-4 space-y-2"
    //   >
    <div className="flex h-full">
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 w-64 z-40 transform transition-transform duration-300 ease-in-out
          fixed top-0 left-0 h-full
          sm:static sm:translate-x-0 sm:min-h-screen
          ${isOpen ? 'translate-x-0 pt-20 sm:pt-0' : '-translate-x-full'}
        `}
      >
        <div className="">
          <NavLink to="/" className={navLinkClass} onClick={() => dispatch(setOpen(false))}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={() => dispatch(setOpen(false))}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={() => dispatch(setOpen(false))}>
            Contact
          </NavLink>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        {/* <div className="sm:hidden bg-gray-900 text-white p-4 flex items-center justify-between border-b border-gray-700">
          <button onClick={() => setIsOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div> */}

        {/* Desktop Header (inline title only) */}
        {/* <div className="hidden sm:flex items-center justify-between bg-gray-900 p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold">🎨 Theme App</h1>
        </div> */}

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
};

export default SidebarLayout;
