import { useNavigate } from "react-router-dom"
import { loginRequest, profileRequest } from "../api/loginRequest"
import { useAuthStore } from "../store/auth"

const Login = () => {

  const navigate = useNavigate()

    const setToken = useAuthStore(state => state.setToken)
    const setProfile = useAuthStore(state => state.setProfile)

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const email = (e.currentTarget.elements[0] as HTMLInputElement).value
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value

        const resLogin = await loginRequest(email, password)
        setToken(resLogin?.data?.token)
        
        const resProfile = await profileRequest()
        setProfile(resProfile?.data.profile)

        navigate("/profile")

    }
  return (
    <form onSubmit={onSubmit}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="****" />
        <button type="submit">Enviar</button>
    </form>
  )
}

export default Login