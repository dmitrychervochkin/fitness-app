import { IUser, UserPayload } from "@/types";

export const transformUser = (dbUser: UserPayload): IUser => ({
    id: dbUser.id,
    email: dbUser.email,
    login: dbUser.login,
    role: dbUser.role,
    createdAt: dbUser.created_at,
    exp: dbUser.exp,
    iat: dbUser.iat,
});
