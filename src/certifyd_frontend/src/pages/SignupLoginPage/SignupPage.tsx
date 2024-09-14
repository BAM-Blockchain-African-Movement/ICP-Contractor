"use client";

import { useState } from "react";
import { sha256 } from 'js-sha256';
import { Button, Input, Label } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiLogoGoogle } from "react-icons/bi";
import signup from "./../../assets/signup.jpg";
import certifydlogo from "./../../assets/logo.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { main } from '../../../declarations/main';  // Adjust path based on where dfx generated files

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Props = {
  logo: ImageProps;
  title: string;
  description: string;
  signUpButton: ButtonProps;
  signUpWithGoogleButton: ButtonProps;
  image: ImageProps;
  logInText: string;
  logInLink: {
    text: string;
    url: string;
  };
  footerText: string;
};

export type Signup7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Signup7 = (props: Signup7Props) => {
  const {
    logo,
    title,
    description,
    signUpButton,
    signUpWithGoogleButton,
    image,
    logInText,
    logInLink,
    footerText,
  } = {
    ...Signup7Defaults,
    ...props,
  } as Props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const hashedPassword = sha256(password).toString();
    try {
      const result = await main.signup(name, email, password);
      if (result) {
        alert('Signup successful');
      } else {
        alert('User already exists');
      }
      console.log({ name, email, hashedPassword });
    } catch (error) {
      console.error('Signup failed:', error);
    }
    
    
    // TODO: Send data to Motoko canister
    // Example: await yourCanisterActor.signup(name, email, hashedPassword);
  };

  return (
    <>
    <Navbar />
    <section className="min-h-screen px-[12%] py-12 bg-gray-100 w-screen border-t-2 border-t-white">
      <div className="flex w-[90%] mx-auto">
        <div className="relative mx-[5vw] flex items-center justify-between space-x-4 pb-16 pt-20 md:pb-20 md:pt-24 lg:py-20">
          <div className="container max-w-sm">
            <div className="container mb-6 max-w-lg text-center md:mb-8">
              <h1 className="mb-5 text-blue-800 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">Sign Up</h1>
              <p className="md:text-md text-blue-950">{description}</p>
            </div>
            <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
              <div className="grid w-full items-center">
                <Label htmlFor="name" className="mb-2 font-bold text-blue-700">
                  Name *
                </Label>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  className="bg-transparent rounded-full border-2 border-blue-700"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="email" className="mb-2 font-bold text-blue-700">
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
                <Label htmlFor="password" className="mb-2 font-bold text-blue-700">
                  Password *
                </Label>
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
                  variant={signUpButton.variant}
                  size={signUpButton.size}
                  iconLeft={signUpButton.iconLeft}
                  iconRight={signUpButton.iconRight}
                  className=" mt-6 rounded-full bg-blue-700 text-white font-bold"
                >
                  {signUpButton.title}
                </Button>
                {/* <Button
                  variant={signUpWithGoogleButton.variant}
                  size={signUpWithGoogleButton.size}
                  iconLeft={signUpWithGoogleButton.iconLeft}
                  iconRight={signUpWithGoogleButton.iconRight}
                  className="rounded-full border-2 border-blue-700 text-blue-700 font-bold gap-x-3"
                >
                  {signUpWithGoogleButton.title}
                </Button> */}
              </div>
            </form>
            <div className="mt-5 inline-flex w-full items-center justify-center gap-x-1 text-center md:mt-6">
              <p>{logInText}</p>
              <a href={logInLink.url} className=" font-bold">
                {logInLink.text}
              </a>
            </div>
          </div>
        </div>
        <div className="hidden bg-background-secondary lg:block">
          <img src={signup} alt={image.alt} className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export const Signup7Defaults: Signup7Props = {
  logo: {
    url: "#",
    src: "https://relume-assets.s3.amazonaws.com/logo-image.svg",
    alt: "Logo text",
  },
  title: "Sign Up",
  description: "Lorem ipsum dolor sit amet adipiscing elit.",
  signUpButton: {
    title: "Sign up",
  },
  signUpWithGoogleButton: {
    variant: "secondary",
    title: "Sign up with Google",
    iconLeft: <BiLogoGoogle className="size-6" />,
  },
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
  logInText: "Already have an account?",
  logInLink: {
    text: "Log in",
    url: "#",
  },
  footerText: "© 2024 Relume",
};

export default Signup7;
