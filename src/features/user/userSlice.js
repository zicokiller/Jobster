import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async(user, thunkAPI) => {
    console.log(`Register User: ${user}`);
  }
);

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async(user, thunkAPI) => {
      console.log(`Login User: ${user}`);
    }
  );
  


const userSlice = {
  name: "user",
  initialState,
};

export default userSlice.reducer;
