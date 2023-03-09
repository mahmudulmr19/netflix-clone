import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Router from "next/router";

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

const Profiles = () => {
  const { data: user } = useCurrentUser();
  return (
    <div className="flex items-center h-full justify-center">
      <Head>
        <title>Who is Watching?</title>
      </Head>
      <div className="flex flex-col ">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Who is Watching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div onClick={() => Router.push("/home")}>
            <div className="group flex-row w-44 mx-auto">
              <div
                className="w-44 h-44 rounded-md flex 
              items-center justify-center border-2 
              border-transparent group-hover:cursor-pointer
             group-hover:bg-white overflow-hidden"
              >
                <img src="/images/default-blue.png" alt="Profile" />
              </div>

              <div
                className="
                mt-4
                text-gray-400
                text-2xl
                text-center
                group-hover:text-white              
              "
              >
                {user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
