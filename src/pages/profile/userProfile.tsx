import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { userId } = useParams();

  return (
    <div>
      <p>{userId}</p>
    </div>
  );
};

export default UserProfile;
