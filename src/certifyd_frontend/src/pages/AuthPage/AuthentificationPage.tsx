import React, { useState, useEffect } from "react";
import Diploma from "./../../components/Diploma.tsx";
import graduatedCap from "./../../assets/auth_Laureat.jpg";
import { Link } from 'react-router-dom';
import Spinner from './../../components/Spinner.tsx';

interface DiplomaData {
  fullName: string;
  institution: string;
  diplomaType: string;
  description: string;
  profilePicture: string;
}

const AuthenticationPage = () => {
  const [data, setData] = useState<DiplomaData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      // Simulate API call to get stats
      try {
        setTimeout(() => {
          setData({
            fullName: '',
            institution: '',
            diplomaType: '',
            description: '',
            profilePicture: ''
          });
        }, 1500);
      } catch(error) {
        console.log('Error fecthing data fro the backend canister: /n>>>' + error)
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen w-full bg-blue-100 text-gray-700">

      {/* Hero Section */}
      <section className="bg-white py-16 text-center px-[10%]">
        <h1 className="text-5xl font-bold text-blue-800">Instantly Verify Diploma Authenticity with Certifyd</h1>
        <p className="mt-8 px-40 text-lg text-blue-600">Here you can view one of our registered students records. From the link you pursued you can be sure that the diploma is authentified. Use blockchain-powered QR codes to confirm the legitimacy of diplomas, ensuring authenticity with a single scan.</p>
        <Link to="/login">
          <button className="mt-8 mx-2 px-6 py-3 rounded-full bg-blue-600 font-bold text-white hover:bg-blue-700">
            Sign In
          </button>
        </Link>
        <Link to="/signup">
          <button className="mt-4 mx-2 px-6 py-3 rounded-full bg-transparent font-bold text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white">
            Register
          </button>
        </Link>
      </section>
      <hr className="w-[80%] rounded-full mx-auto h-0 border-2 border-blue-600" />

      { loading ? (
        <Spinner loading={loading} />
      ) : (
        <Diploma fullName="John Doe" institution="JFN High Stakes University" diplomaType="Master II" description="Delivered on the 27th May 2019" profilePicture={ graduatedCap } />
      )}

      <hr className="w-[80%] rounded-full mx-auto h-0 border-2 border-blue-600" />


      {/* Testimonial Section */}
      <section className="py-10 text-center bg-white ">
        <blockquote className="text-xl italic text-lg text-gray-700 max-w-2xl mx-auto">
          “As an HR manager, Certifyd’s diploma verification system is a game-changer. I no longer need to manually verify diplomas — it’s all done instantly through the QR code!” — Peter N., HR Manager at GlobalTech
        </blockquote>
      </section>
      <div className="bg-white">
      </div>
      {/* Features Highlight */}
      <section className="pt-10 pb-20 bg-blue-100">
        <h2 className="text-3xl font-bold text-center text-blue-800">Platform Features</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="border-[8px] border-transparent border-gray-300 border-l-blue-600 bg-gray-50 mx-auto py-10 px-8 mb-4 shadow-lg text-center">
            <h3 className="text-xl font-bold text-blue-600">QR Code-Based Verification</h3>
            <p className="mt-4 text-gray-600">Instantly check the legitimacy of a diploma through a blockchain-backed QR code.</p>
          </div>
          <div className="border-[8px] border-transparent border-gray-300 border-x-blue-600 bg-gray-50 mx-auto py-10 px-8 mb-4 shadow-lg text-center">
            <h3 className="text-xl font-bold text-blue-600">Decentralized and Secure</h3>
            <p className="mt-4 text-gray-600">Each diploma’s NFT is stored on the ICP blockchain, ensuring tamper-proof security.</p>
          </div>
          <div className="border-[8px] border-transparent border-gray-300 border-r-blue-600 bg-gray-50 mx-auto py-10 px-8 mb-4 shadow-lg text-center">
            <h3 className="text-xl font-bold text-blue-600">No Manual Processing</h3>
            <p className="mt-4 text-gray-600">Employers and institutions don’t need to rely on manual validation processes anymore.</p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="text-center py-12 bg-white">
        <h4 className="text-2xl font-semibold text-blue-800">Resources</h4>
        <ul className="list-none mt-6 space-y-4 text-blue-600">
          <li><a href="#" className="underline hover:text-blue-800">Guide for employers: How to use Certifyd’s QR code verification for hiring</a></li>
          <li><a href="#" className="underline hover:text-blue-800">The impact of blockchain on diploma fraud prevention</a></li>
        </ul>
      </section>

    </div>
  );
};

export default AuthenticationPage;
