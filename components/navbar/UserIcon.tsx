
import React from "react";
import { LuUser } from "react-icons/lu";

import { currentUser } from "@clerk/nextjs/server";
async function UserIcon() {
  
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      <img
        src={profileImage}
        alt="profile image"
        className="rounded-full object-cover"
      />
    );
  }

  return <LuUser className="rounded-full w-6 h-6 text-white" />;
}

export default UserIcon;
