import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserType = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  birthday: string;
  profileImage: string;
};

export type UserState = UserType & {
  isLogged: boolean;
};

const initialState: UserState = {
  id: 0,
  email: '',
  lastName: '',
  firstName: '',
  birthday: '',
  isLogged: false,
  profileImage: '',
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedUser(state, action: PayloadAction<UserType>) {
      return {
        ...action.payload,
        isLogged: true,
      };
    },
    initUser(state) {
      state = initialState;
      return state;
    },
  },
});

export const userActions = { ...user.actions };

export default user;
