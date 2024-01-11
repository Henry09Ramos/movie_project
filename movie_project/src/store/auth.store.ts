import {create} from 'zustand'
import {persist} from 'zustand/middleware'

type State = {
    tokenb: string;
    isAuth: boolean;
   };
  
  type Actions = {
    setToken: (token: string) => void;
    logOut: () => void;
  };
  
  export const useAuthStore = create(
    persist<State & Actions>(
      (set) => ({
        tokenb: "",
        isAuth: false,
        setToken: (token: string) =>
          set(() => ({
            tokenb: token,
            isAuth: true,
          })),
        logOut: () =>
          set(() => ({
            tokenb: "",
            isAuth: false,
          })),
      }),
      {
        name: "auth",
      }
    )
  );
  