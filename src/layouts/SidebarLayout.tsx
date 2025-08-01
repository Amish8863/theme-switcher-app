import { type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

const SidebarLayout = ({ children }: Props) => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 rounded transition ${
      isActive ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`;

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-2">
        <h2 className="text-lg font-semibold mb-4">Sidebar Menu</h2>
        <NavLink to="/" className={navLinkClass}>Home</NavLink>
        <NavLink to="/about" className={navLinkClass}>About</NavLink>
        <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default SidebarLayout;
