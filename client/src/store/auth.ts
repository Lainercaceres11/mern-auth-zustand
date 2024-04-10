import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
    token: string,
    profile: any,
    isAllowed: boolean
}

type Actions = {
    setToken: (token: string) => void,
    setProfile: (profile: any) => void,
    logout: ()=> void
}

export const useAuthStore = create(persist<State & Actions>(
    (set)=> ({
        token: "",
        profile: null,
        isAllowed: false,
        setToken: (token: string) => set(()=>({
            token,
            isAllowed: true
        })),
        setProfile: (profile: any) => set(()=>({
            profile
        })),
        logout: () => set(()=>({
            token: "",
            isAllowed: false,
            profile: null
        })),
    }), {
        name: "auth-token"
    }
))