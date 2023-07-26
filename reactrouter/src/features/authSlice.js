import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import setAuthToken from "../Components/SetAuthToken";

export const signInUser = createAsyncThunk(
  "signInUser",
  async (data, { rejectWithValue, dispatch }) => {
    axios
      .post("/api/auth/loginuser", data.user)
      .then(async (res) => {
        alert(res.data.message);
        const token = res?.data?.token;
        setAuthToken(token);
        dispatch(getUserInfo());
        localStorage.setItem("todoapp", token);

        data.navigate("/todolist");
        return res?.data;
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
        return rejectWithValue(err.response.data.message);
      });
  }
);

export const getUserInfo = createAsyncThunk(
  "getUserInfo",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/user/getUserInfo");
      const result = response.data.data;
      return result;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const removeUserInfo = createAsyncThunk(
  "removeUserInfo",
  async (data, { rejectWithValue }) => {
    try {
      return {};
    } catch (error) {
      return rejectWithValue({});
    }
  }
);

export const auth = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: null,
    isAuthenticated: false,
    user: {},
  },
  extraReducers: (builder) => {
    builder.addCase(signInUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signInUser.fulfilled, (state) => {
      state.loading = false;
      //   state.isAuthenticated = true;
    });
    builder.addCase(signInUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getUserInfo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    builder.addCase(getUserInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(removeUserInfo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removeUserInfo.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
    });
    builder.addCase(removeUserInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default auth.reducer;
