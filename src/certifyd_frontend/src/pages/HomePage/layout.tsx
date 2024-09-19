import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import img1 from "./../../assets/university1.avif"

type ImageProps = {
  src: string;
  alt?: string;
};

type FeaturesProps = {
  icon: ImageProps;
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  features: FeaturesProps[];
  image: ImageProps;
};

export type Layout253Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout = () => {
  
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 lg:px-[8%]">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 items-start justify-start gap-y-12 md:gap-x-12 md:gap-y-16 lg:gap-x-20">
          <div>
            <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-7xl max-w-[700px] text-blue-900">Get to see why university need us</h2>
          </div>
          <div className="flex ">
            <div className="divider divider-horizontal w-0 border-4 border-blue-900 rounded-full "></div>
            <div className="w-[90%] text-blue-900 ">
              <div className=" rounded-2xl w-full h-min ml-10">
                <div className="container">
                  <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
                  <div>
                      <img src={ img1 } className="w-full object-cover" alt="Image not loaded" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-4xl font-bold mb-6">Seamless Integration</h3>
                    <p className="text-xl">Our platform is designed to integrate effortlessly with your existing academic systems. This means you can start offering blockchain-secured diplomas without disrupting your current processes. Our team will work closely with you to ensure a smooth transition and setup.</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout253Defaults: Layout253Props = {
  tagline: "Tagline",
  heading: "Get to see why university need us",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  features: [
    {
      icon: { src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg", alt: "Relume logo 1" },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      icon: { src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg", alt: "Relume logo 2" },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      icon: { src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg", alt: "Relume logo 3" },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      icon: { src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg", alt: "Relume logo 4" },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
  ],
};
