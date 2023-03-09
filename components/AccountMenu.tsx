import React from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";

interface AccountMenuProps {
  visible: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  if (!visible) return null;
  return (
    <div className="bg-[#040714] border border-[#ffffff8c] overflow-hidden rounded  text-left   absolute top-20 right-10 flex flex-col ">
      <Link
        href="/home"
        className="block px-5 py-1.5 hover:bg-gray-900 cursor-pointer"
      >
        Home
      </Link>
      <a
        onClick={() => signOut()}
        className="block px-5 py-1.5 hover:bg-gray-900 cursor-pointer"
      >
        Logout
      </a>
    </div>
  );
};

export default AccountMenu;
