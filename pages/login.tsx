import Footer from "@/components/Footer";
import Input from "@/components/Input";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React, { useState, useCallback } from "react";
import { getSession, signIn } from "next-auth/react";
import { NextPageContext } from "next";
import Router from "next/router";
import { toast } from "react-toastify";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((prev) => (prev === "login" ? "register" : "login"));
  }, []);

  const login = useCallback(async () => {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/profiles",
      });

      if (result?.error) {
        toast.error(result.error);
      } else {
        Router.push("/home");
      }
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(
    async (e: any) => {
      try {
        await axios.post("/api/register", {
          email,
          name,
          password,
        });
        login();
      } catch (error) {
        console.log(error);
      }
    },
    [email, name, password, login]
  );

  return (
    <div>
      <Head>
        <title>Login - Netflix</title>
      </Head>
      <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className="bg-black w-full h-full lg:bg-opacity-75">
          <nav className="px-12 py-5">
            <Link href="/">
              <img
                className="w-28  sm:w-32 md:w-36"
                src="/images/logo.png"
                alt="logo"
              />
            </Link>
          </nav>
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
              <h2 className="text-white text-4xl mb-8 font-medium">
                {variant === "login" ? "Sign In" : "Sign Up"}
              </h2>
              <div className="flex flex-col gap-4">
                {variant === "register" && (
                  <Input
                    label="Username"
                    onChange={(e: any) => setName(e.target.value)}
                    id="name"
                    type="text"
                    value={name}
                  />
                )}

                <Input
                  label="Email"
                  onChange={(e: any) => setEmail(e.target.value)}
                  id="email"
                  type="email"
                  value={email}
                />

                <Input
                  label="Password"
                  onChange={(e: any) => setPassword(e.target.value)}
                  id="password"
                  type="password"
                  value={password}
                />
              </div>

              <button
                onClick={variant === "login" ? login : register}
                className="bg-[#ca0812] hover:bg-[#E50914] py-3 text-white rounded-md w-full mt-10 transition"
              >
                {variant === "login" ? "Login" : "Sign Up"}
              </button>
              <p className="text-neutral-500 mt-12">
                {variant === "login"
                  ? "New to Netflix?"
                  : "Already have an account?"}{" "}
                &nbsp;
                <span
                  onClick={toggleVariant}
                  className="text-white hover:underline cursor-pointer"
                >
                  {variant === "login" ? "Sign up now." : "Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Login;
