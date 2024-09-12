import React from "react";

const AuthenticationPage = () => {
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
        <h1 className="text-5xl font-bold text-blue-800">Instantly Verify Diploma Authenticity with Certifyd</h1>
        <p className="mt-4 text-lg text-blue-600">Use blockchain-powered QR codes to confirm the legitimacy of diplomas, ensuring authenticity with a single scan.</p>
        <button className="mt-8 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700">
          Verify a Diploma Now
        </button>
        <button className="mt-4 px-6 py-3 rounded-full bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white">
          Learn About NFT-Verified Diplomas
        </button>
      </section>

      {/* Subheadline */}
      <section className="py-10 text-center bg-white">
        <p className="text-lg text-gray-700">Employers and institutions can authenticate student credentials by scanning a Certifyd diploma’s unique QR code.</p>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-blue-50">
        <h2 className="text-3xl font-bold text-center text-blue-800">Why Choose Certifyd for Authentication?</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-blue-600">Instant Verification</h3>
            <p className="mt-4 text-gray-600">Employers can confirm a diploma’s authenticity by scanning a QR code.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-blue-600">Blockchain Security</h3>
            <p className="mt-4 text-gray-600">Each diploma is tied to an NFT, making forgery or alteration impossible.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-blue-600">Seamless Experience</h3>
            <p className="mt-4 text-gray-600">No need for third-party verification; the blockchain-powered system handles everything.</p>
          </div>
        </div>
      </section>

      {/* Supporting Image */}
      <section className="text-center py-16 bg-white">
        <img
          src="https://via.placeholder.com/800x400"
          alt="Employer scanning QR code for diploma verification"
          className="mx-auto rounded-lg shadow-md"
        />
        <p className="text-sm text-gray-600 mt-4">Employer verifying a diploma’s authenticity using Certifyd’s blockchain-backed QR code.</p>
      </section>

      {/* Testimonial Section */}
      <section className="bg-white py-16 text-center">
        <blockquote className="italic text-lg text-gray-700 max-w-2xl mx-auto">
          “As an HR manager, Certifyd’s diploma verification system is a game-changer. I no longer need to manually verify diplomas — it’s all done instantly through the QR code!” — Mary A., HR Manager at GlobalTech
        </blockquote>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-12 bg-blue-600">
        <h3 className="text-3xl font-bold text-white">Learn About the Benefits of Blockchain Authentication</h3>
        <button className="mt-8 px-6 py-3 rounded-full bg-white text-blue-600 hover:bg-gray-200">
          See How Certifyd Works for Employers
        </button>
      </section>

      {/* Features Highlight */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-800">Platform Features</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-blue-600">QR Code-Based Verification</h3>
            <p className="mt-4 text-gray-600">Instantly check the legitimacy of a diploma through a blockchain-backed QR code.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-blue-600">Decentralized and Secure</h3>
            <p className="mt-4 text-gray-600">Each diploma’s NFT is stored on the ICP blockchain, ensuring tamper-proof security.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-blue-600">No Manual Processing</h3>
            <p className="mt-4 text-gray-600">Employers and institutions don’t need to rely on manual validation processes anymore.</p>
          </div>
        </div>
      </section>

      {/* Success Indicators Section */}
      <section className="py-16 bg-blue-50">
        <h3 className="text-3xl font-bold text-center text-blue-800">Success Stories</h3>
        <p className="text-lg text-center text-gray-600 mt-4">
          Over 1,000 employers have successfully verified student credentials using Certifyd.
        </p>
        <p className="text-lg text-center text-gray-600 mt-2">
          Diploma fraud cases reduced by 90% among institutions using Certifyd verification.
        </p>
      </section>

      {/* Resources Section */}
      <section className="text-center py-12 bg-white">
        <h4 className="text-2xl font-semibold text-blue-800">Resources</h4>
        <ul className="list-none mt-6 space-y-4 text-blue-600">
          <li><a href="#" className="underline hover:text-blue-800">Guide for employers: How to use Certifyd’s QR code verification for hiring</a></li>
          <li><a href="#" className="underline hover:text-blue-800">The impact of blockchain on diploma fraud prevention</a></li>
        </ul>
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

export default AuthenticationPage;
