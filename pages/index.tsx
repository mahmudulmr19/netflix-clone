import HomePage from "@/scense/Home/HomePage";
import Head from "next/head";

import React from "react";

const Home = () => {
  return (
    <div>
      <Head>
        <title>
          Netflix Bangladesh - Watch TV Shows Online, Watch Movies Online
        </title>
        <meta
          name="description"
          content="this website made by mahmudul hasan"
        />
      </Head>
      {/* Main Section */}
      <HomePage />
    </div>
  );
};

export default Home;
