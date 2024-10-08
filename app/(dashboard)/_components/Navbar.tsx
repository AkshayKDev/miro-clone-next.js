"use client";

import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5">
      <div></div>
      <UserButton />
    </div>
  );
};

export default Navbar;
