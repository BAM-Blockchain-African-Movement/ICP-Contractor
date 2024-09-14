import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import headerimage from "./../../assets/ceremony-1866532_1280.jpg";
import { Link } from 'react-router-dom';

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header = (props: Header1Props) => {
  
  return (
    <>
      <section className="pb-16 md:pb-24 lg:pb-28">
        <div
          className="hero min-h-screen md:w-screen relative">
            <img src={ headerimage } className="min-w-full" />
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content px-0 text-neutral-content text-center">
            <div className="max-w-2xl">
              <h1 className="mb-5 text-5xl font-bold">Transform Your Diploma into a Secure Digital Asset</h1>
              <p className="mb-5 text-xl">
              Mint your certified diploma as an NFT and track its authenticity on the blockchain. Revolutionize the way you manage and verify your academic achievements.
              </p>
              <Link to="/login">
              <button className="mt-8 px-6 py-4 rounded-lg bg-gradient-to-r font-bold from-blue-500 to-blue-700 text-white hover:from-blue-700 hover:to-blue-900 transition duration-300">
                Get Started
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Header1Defaults: Header1Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
};


export default Header;