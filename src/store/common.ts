import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CommonState = {
  validateMode: boolean;
};

const initialState: CommonState = {
  validateMode: false,
};

const common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setValidateMode(state, action: PayloadAction<boolean>) {
      state.validateMode = action.payload;
    },
  },
});

export const commonActions = {
  ...common.actions,
};

export default common;