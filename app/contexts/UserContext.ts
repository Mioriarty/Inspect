import { createContext, useContext } from "react";

export interface UserDetails {
    name: string,
    token?: string,
}

export const UserContext = createContext<UserDetails | null>(null);
export const useUser = () => useContext(UserContext);
