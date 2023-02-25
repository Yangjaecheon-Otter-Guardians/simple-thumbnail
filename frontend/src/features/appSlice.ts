import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface AppConfig {
  hello: string;
}

const initialState: AppConfig = {
  hello: 'Hello World',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    helloWorld: (state) => {
      console.log(state.hello);
    },
  },
});
export const { helloWorld } = appSlice.actions;
export default appSlice.reducer;

export const selectHello = (state: RootState) => state.app.hello;
