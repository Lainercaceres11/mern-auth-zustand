import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";

const Profile = () => {
  const logout = useAuthStore((state) => state.logout);
  const profile = useAuthStore((state) => state.profile);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div>
      {JSON.stringify(profile)}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
