import { type Theme } from './themeTypes';

// Defining the styles for different themes

export const getButtonClass = (theme: Theme): string => {
  switch (theme) {
    case 'theme1':
      return 'bg-blue-600 hover:bg-blue-700 text-white';
    case 'theme2':
      return 'bg-indigo-500 hover:bg-indigo-600 text-white';
    case 'theme3':
      return 'bg-emerald-400 hover:bg-emerald-500 text-slate-900';
    default:
      return 'bg-gray-500 text-white';
  }
};
