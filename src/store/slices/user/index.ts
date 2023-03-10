import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { User } from 'services/user/type';

import { requestStatusReducer } from '../request';
import { UserState } from './type';

const initialState: UserState = {
  selectedUser: null,
  error: null,
  users: [],
  loading: true,
  allUsers: []
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSelectedUser: (state: UserState, action: PayloadAction<User>) => {
      state.selectedUser = action.payload;
    },
    setUsers: (state: UserState, action: PayloadAction<User[]>) => {
      if (!action.payload.length) {
        state = initialState;
      }

      state.users = action.payload;

      const selectedUserFromPayload = action.payload.find(
        (user) => user.id === state.selectedUser?.id
      );

      state.selectedUser = selectedUserFromPayload ?? action.payload[0];
    },
    setAllUsers: (state: UserState, action: PayloadAction<User[]>) => {
      state.allUsers = action.payload;
    },
    ...requestStatusReducer
  }
});

export const {
  setSelectedUser,
  setUsers,
  setLoading,
  setError,
  resetError,
  setAllUsers
} = userSlice.actions;

export default userSlice.reducer;
