export interface IUser {
    id: string;
    email: string;
    login: string;
    role: "user" | "admin";
    createdAt: string;
    exp: number;
    iat: number;
}
