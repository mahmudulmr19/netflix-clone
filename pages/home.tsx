import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
import Head from "next/head";
import React from "react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function home() {
  const { data: user } = useCurrentUser();

  return (
    <div>
      <Head>
        <title>Home - Netflix</title>
      </Head>
      <p>Login as {user?.name}</p>
      <button
        className="h-10 w-full text-black bg-white"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </div>
  );
}
