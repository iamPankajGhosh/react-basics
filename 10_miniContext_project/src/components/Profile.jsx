import { useContext } from "react";
import UserContaxt from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContaxt);

  if (!user) return <div>Please Log in</div>;

  return <div>Welcome {user.username}</div>;
}

export default Profile;
