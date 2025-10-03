export type UserPayload = {
    id: string;
    email: string;
    login: string;
    role: "user" | "admin";
    created_at: string;
    exp: number;
    iat: number;
};
