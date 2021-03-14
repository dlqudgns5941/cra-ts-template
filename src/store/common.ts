import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CommonState = {
  currentTheme: 'light' | 'dark';
};

const initialState: CommonState = {
  currentTheme: 'light',
};

const common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setCurrentTheme(state, action: PayloadAction<'light' | 'dark'>) {
      state.currentTheme = action.payload;
    },
  },
});

export const commonActions = {
  ...common.actions,
};

export default common;
