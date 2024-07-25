import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex items-center">
        <img
          className="h-8 rounded-full mr-2 "
          src={user.picture}
          alt={user.name}
        />
        <p className="text-white mr-2">{user.name}</p>
        {/* <p>{user.email}</p> */}
      </div>
    )
  );
};

export default Profile;
