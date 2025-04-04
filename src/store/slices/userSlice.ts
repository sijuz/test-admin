import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: number | null;
  username: string | null;
  first_name: string | null;
  last_name: string | null;
  photo_url: string | null;
}

const initialState: UserState = {
  id: null,
  username: null,
  first_name: null,
  last_name: null,
  photo_url: null,
};

const loadUserFromLocalStorage = (): UserState => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return initialState;
};

export const userSlice = createSlice({
  name: "user",
  initialState: loadUserFromLocalStorage(),
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      const userData = action.payload;
      localStorage.setItem("user", JSON.stringify(userData));
      return { ...state, ...userData };
    },
    logout(state) {
      localStorage.removeItem("user");
      return initialState;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;