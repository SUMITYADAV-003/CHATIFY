import { createSlice } from '@reduxjs/toolkit';
import { loginUserThunk } from '../user.thunk';

const initialState = {
  isAuthenticated: false,
  screenLoading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserThunk.pending, (state, actions) => {
      console.log("pending");
    });
    builder.addCase(loginUserThunk.fulfilled, (state, actions) => {
      console.log("fullfilled");
    });
    builder.addCase(loginUserThunk.rejected, (state, actions) => {
      console.log("rejected");
    });
  },
});


export const { Login } = userSlice.actions;

export default userSlice.reducer;