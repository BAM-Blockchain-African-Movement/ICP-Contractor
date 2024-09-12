import React from "react";
import { FaUniversity, FaLock, FaHandshake, FaGlobe, FaUsers, FaCheckCircle } from 'react-icons/fa';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-white font-[Yu-Gothic] text-gray-700">
      {/* Header */}
      <header className="bg-blue-800 text-white py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Certifyd</div>
          <div>
            <a href="#" className="text-white px-4 hover:text-gray-300">Home</a>
            <a href="#" className="text-white px-4 hover:text-gray-300">Students</a>
            <a href="#" className="text-white px-4 hover:text-gray-300">Universities</a>
            <a href="#" className="text-white px-4 hover:text-gray-300">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-100 py-16 text-center">
        <h1 className="text-5xl font-bold text-blue-800">About Certifyd</h1>
        <p className="mt-4 text-lg text-blue-600">
          Empowering educational institutions and students through blockchain-based diploma authentication.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-800">Our Mission</h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-700">
          Certifyd aims to revolutionize diploma management by offering secure, verifiable blockchain technology. We enable students, universities, and employers to trust the authenticity of credentials with instant NFT-backed verification.
        </p>
      </section>

      {/* Key Values Section */}
      <section className="py-16 bg-blue-50">
        <h2 className="text-3xl font-bold text-center text-blue-800">Our Key Values</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 text-center">
          
          {/* Icon 1: University Partnerships */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaUniversity className="text-blue-600 text-6xl mx-auto" />
            <h3 className="text-xl font-bold text-blue-600 mt-4">University Partnerships</h3>
            <p className="mt-4 text-gray-600">Collaborating with leading universities to streamline diploma issuance and verification.</p>
          </div>

          {/* Icon 2: Security */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaLock className="text-blue-600 text-6xl mx-auto" />
            <h3 className="text-xl font-bold text-blue-600 mt-4">Security</h3>
            <p className="mt-4 text-gray-600">Providing tamper-proof diplomas through secure blockchain technology, ensuring authenticity.</p>
          </div>

          {/* Icon 3: Trust */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaHandshake className="text-blue-600 text-6xl mx-auto" />
            <h3 className="text-xl font-bold text-blue-600 mt-4">Trust</h3>
            <p className="mt-4 text-gray-600">Building trust between students, universities, and employers with transparent verification processes.</p>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-800">Our Global Impact</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 text-center">
          
          {/* Icon 4: Global Reach */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
            <FaGlobe className="text-blue-600 text-6xl mx-auto" />
            <h3 className="text-xl font-bold text-blue-600 mt-4">Global Reach</h3>
            <p className="mt-4 text-gray-600">Certifyd operates across continents, helping universities and students globally in secure credentialing.</p>
          </div>

          {/* Icon 5: Community */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
            <FaUsers className="text-blue-600 text-6xl mx-auto" />
            <h3 className="text-xl font-bold text-blue-600 mt-4">Community Engagement</h3>
            <p className="mt-4 text-gray-600">Supporting a diverse community of students, educational institutions, and employers with our platform.</p>
          </div>

          {/* Icon 6: Verified Credentials */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
            <FaCheckCircle className="text-blue-600 text-6xl mx-auto" />
            <h3 className="text-xl font-bold text-blue-600 mt-4">Verified Credentials</h3>
            <p className="mt-4 text-gray-600">Over 10,000 students have minted their NFT-backed diplomas using Certifyd.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h3 className="text-3xl font-bold">Join Us in Securing the Future of Education</h3>
        <p className="mt-4 text-lg">Partner with Certifyd and bring blockchain security to your institution today.</p>
        <button className="mt-8 px-6 py-3 rounded-full bg-white text-blue-600 hover:bg-gray-200">
          Learn More About Certifyd
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Certifyd. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;
