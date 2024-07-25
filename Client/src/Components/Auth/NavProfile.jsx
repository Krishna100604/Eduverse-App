import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const NavProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const getFirstName = (fullName) => {
    return fullName.split(" ")[0];
  };

  return (
    isAuthenticated && (
      <div className="flex items-center">
        <img
          className="h-8 rounded-full mr-2"
          src={user.picture}
          alt={getFirstName(user.name)}
        />
        <p className="text-white mr-2">{getFirstName(user.name)}</p>
      </div>
    )
  );
};

export default NavProfile;
