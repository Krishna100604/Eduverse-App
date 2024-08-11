import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Spinner from "../Loading/Spinner";

const NavProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  const getFirstName = (fullName) => {
    return fullName.split(" ")[0];
  };

  return (
    isAuthenticated && (
      <div className="flex items-center">
        <img
          className="h-7 rounded-full mr-2"
          src={user.picture}
          alt={getFirstName(user.name)}
        />
        <p className="text-[#1da8e2] hover:text-blue-600 mr-2">
          {getFirstName(user.name)}
        </p>
      </div>
    )
  );
};

export default NavProfile;
