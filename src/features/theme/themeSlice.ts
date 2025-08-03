import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Theme } from './themeTypes';

const savedTheme = (localStorage.getItem('app-theme') as Theme) || 'theme1';

// defining the type

interface ThemeState {
  currentTheme: Theme;
  open: boolean;
}

const initialState: ThemeState = {
  currentTheme: savedTheme,
  open: false
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // Setting theme to the localStorage
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.currentTheme = action.payload;
      localStorage.setItem('app-theme', action.payload);
    },

    // managing sidebar open/close state
    setOpen: (state, action) => {
      state.open = action.payload;
    }
  },
});

export const { setTheme, setOpen } = themeSlice.actions;
export default themeSlice.reducer;
