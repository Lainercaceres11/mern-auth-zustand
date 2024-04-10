import authApi from "../libs/axios"

export const loginRequest = async (email: string, password: string)=>{
    try {
        return await authApi.post("login", {email, password})
    } catch (error) {
        console.log(error)
    }
}

export const profileRequest = async ()=>{
    try {
        return await authApi.get("profile")
    } catch (error) {
        console.log(error)
    }
}