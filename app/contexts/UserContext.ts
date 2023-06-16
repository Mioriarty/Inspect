import { createContext, useContext } from "react";

export interface UserDetails {
  name: string;
  token?: string;
}

export interface UserContextType {
  user: UserDetails;
  setUser: (UserDetails) => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: null,
});
export const useUser = () => useContext(UserContext);
