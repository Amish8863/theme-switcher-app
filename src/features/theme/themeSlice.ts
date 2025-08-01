import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Theme } from './themeTypes';

const savedTheme = (localStorage.getItem('app-theme') as Theme) || 'theme1';

interface ThemeState {
  currentTheme: Theme;
}

const initialState: ThemeState = {
  currentTheme: savedTheme,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.currentTheme = action.payload;
      localStorage.setItem('app-theme', action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
