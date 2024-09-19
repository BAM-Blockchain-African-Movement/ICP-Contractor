import { useState } from "react";
import { sha256 } from 'js-sha256';
import { Button, Input, Label } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiLogoGoogle } from "react-icons/bi";
import login from "./../../assets/login.jpg";
// import certifydlogo from "./../../assets/logo.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { certifyd_backend } from '../../../../declarations/certifyd_backend';  // Adjust path accordingly


type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Props = {
  logo: ImageProps;
  title: string;
  description: string;
  logInButton: ButtonProps;
  logInWithGoogleButton: ButtonProps;
  forgotPassword: {
    text: string;
    url: string;
  };
  image: ImageProps;
  signUpText: string;
  signUpLink: {
    text: string;
    url: string;
  };
  footerText: string;
};

export type Login7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Login = (props: Login7Props) => {
  const {
    description,
    logInButton,
    forgotPassword,
    image,
    signUpText,
    signUpLink,
    footerText,
  } = {
    ...Login7Defaults,
    ...props,
  } as Props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const passwordHash = sha256(password).toString();  // Hash the password on the client-side
    try {
      const result = await certifyd_backend.login(email, passwordHash);
      if (result) {
        alert('Login successful');
      } else {
        alert('Invalid credentials');
      }
      console.log({ email, password });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <>
    <Navbar />
    <section className="min-h-screen px-[12%] py-12 bg-gray-100 w-screen border-t-2 border-t-white">
      <div className="flex w-[90%] mx-auto">
        {/* <div className="absolute bottom-auto left-0 right-0 top-0 z-10 flex h-16 w-full items-center justify-center px-[5%] md:h-18 lg:justify-between">
          <a>
            <img src={certifydlogo} alt="Logo" className=" size-16 rounded-full" />
          </a>
        </div> */}
        <div className="relative mx-[5vw] flex items-center justify-between space-x-4 pb-16 pt-20 md:pb-20 md:pt-24 lg:py-20">
          <div className="container max-w-sm">
            <div className="container mb-6 max-w-lg text-center md:mb-8">
              <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">Log In</h1>
              <p className="md:text-md">{description}</p>
            </div>
            <form className="grid grid-cols-1 gap-6" onSubmit={ handleSubmit }>
              <div className="grid w-full items-center">
                <Label htmlFor="email" className="mb-1 font-bold text-blue-700">
                  Email *
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  className="bg-transparent rounded-full border-2 border-blue-700"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid w-full items-center">
                <div className="flex items-start justify-between">
                  <Label htmlFor="password" className="mb-1 font-bold text-blue-700">
                    Password*
                  </Label>
                  <a href={forgotPassword.url} className="underline">
                    {forgotPassword.text}
                  </a>
                </div>
                <Input
                  type="password"
                  id="password"
                  className="rounded-full bg-transparent border-2 border-blue-700"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="grid-col-1 grid gap-4">
                <Button
                  variant={logInButton.variant}
                  size={logInButton.size}
                  iconLeft={logInButton.iconLeft}
                  iconRight={logInButton.iconRight}
                  className="rounded-full bg-blue-700 text-white font-bold "
                >
                  {logInButton.title}
                </Button>
                <Button
                  variant={logInButton.variant}
                  size={logInButton.size}
                  iconLeft={logInButton.iconLeft}
                  iconRight={logInButton.iconRight}
                  className="rounded-full bg-gray-700 text-white font-bold "
                >
                  {logInButton.title}
                </Button>
              </div>
            </form>
            <div className="mt-5 inline-flex w-full items-center justify-center gap-x-1 text-center md:mt-6">
              <p>{signUpText}</p>
              <a href={signUpLink.url} className="underline">
                {signUpLink.text}
              </a>
            </div>
          </div>
        </div>
        <div className="hidden bg-background-secondary lg:block">
          <img src={login} alt={image.alt} className="h-full w-full object-cover" />
        </div>
        <footer className="absolute bottom-0 left-0 right-0 top-auto flex h-16 w-full items-center justify-center pr-[5%] md:h-18 lg:justify-start lg:px-[5%]">
          <p className="text-sm">{footerText}</p>
        </footer>
      </div>
    </section>
    <Footer />
    </>
  );
};

export const Login7Defaults: Login7Props = {
  logo: {
    url: "#",
    src: "https://relume-assets.s3.amazonaws.com/logo-image.svg",
    alt: "Logo text",
  },
  title: "Log In",
  description: "Welcome back. \n Please, enter your credentials here",
  logInButton: {
    title: "Log in",
  },
  logInWithGoogleButton: {
    variant: "secondary",
    title: "Log in as a",
    iconLeft: <BiLogoGoogle className="size-6" />,
  },
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
  forgotPassword: {
    text: "Forgot your password?",
    url: "#",
  },
  signUpText: "Don't have an account?",
  signUpLink: {
    text: "Sign up",
    url: "#",
  },
  footerText: "© 2024 Relume",
};

export default Login;
