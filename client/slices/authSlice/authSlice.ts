import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootState } from "@/store";
import { IUser } from "@/types";

interface AuthState {
    token: string | null;
    role: "user" | "admin" | null;
    email: string | null;
    login: string | null;
    createdAt: string | null;
}

const initialState: AuthState = {
    token: null,
    role: null,
    email: null,
    login: null,
    createdAt: null,
};

export interface IUserToken extends IUser {
    token: string;
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<IUserToken>) => {
            state.token = action.payload.token;
            state.role = action.payload.role;
            state.login = action.payload.login;
            state.email = action.payload.email;

            AsyncStorage.setItem("token", action.payload.token);
            AsyncStorage.setItem(
                "user",
                JSON.stringify({
                    role: action.payload.role,
                    email: action.payload.email,
                    login: action.payload.login,
                    createdAt: action.payload.createdAt,
                })
            );
        },

        logout: (state) => {
            state.token = null;
            state.role = null;
            state.email = null;
            state.login = null;

            AsyncStorage.removeItem("token");
            AsyncStorage.removeItem("user");
        },
    },
});

export const { login, logout } = authSlice.actions;
export const selectToken = (state: RootState) => state.auth.token;
export const selectRole = (state: RootState) => state.auth.role;
export const selectEmail = (state: RootState) => state.auth.email;
export const selectLogin = (state: RootState) => state.auth.login;
export default authSlice.reducer;
