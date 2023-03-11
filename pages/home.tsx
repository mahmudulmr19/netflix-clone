import Billboard from "@/components/Billboard";
import Navbar from "@/components/Navbar";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Netflix</title>
      </Head>
      <Navbar />
      <Billboard />
    </div>
  );
}
