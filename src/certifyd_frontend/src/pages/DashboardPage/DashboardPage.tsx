import { useEffect, useState } from 'react';
// import { useParams, useNavigate} from 'react-router-dom';

import QRCode from 'react-qr-code';
import Spinner from './../../components/Spinner';

import { certifyd_backend } from '../../../../declarations/certifyd_backend';  // Adjust path accordingly
import { Principal } from '@dfinity/principal';

interface NFTStats {
  verificationAttempts: number;
  shareCount: number;
}

const DashboardPage = ({ ownerId }: { ownerId: string }) => {
  const [stats, setStats] = useState<NFTStats | null>(null);
  const [NFTsNumber, setNFTsNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  // const { id } = useParams();
  const owner = '';
  

  const nftLink =  `http://localhost:5173/auth/{ id }`;

  // Simulate fetching NFT stats
  useEffect(() => {
    const fetchStats = async () => {
      // Simulate API call to get stats
      try {
        const result = certifyd_backend.getOwnerNFTsNumber(Principal.fromText(owner));
        setTimeout(() => {
          setNFTsNumber(Number(result));
          setStats({
            verificationAttempts: 2,
            shareCount: 10,
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

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${nftLink}`);
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/share?url=${nftLink}&text=Check out my certified diploma NFT!`);
  };

  const shareOnWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=Check out my certified diploma NFT: ${nftLink}`);
  };

  return (
    <div className="max-w-4xl mx-auto py-16">
      <h1 className="text-3xl font-bold mb-6">Your NFT Dashboard</h1>
      
      { loading ? (
          <Spinner loading={loading} />
      ) : (
        <div>
          <h4 className="text-xl font-bold mb-6 ml-8">{ `You have actually minted ${ NFTsNumber } diplomas` }</h4>
          <div className="text-xl bg-white p-6 rounded-lg shadow-lg">
            <p>User ID: <span className="text-blue-600">{ownerId}</span></p>
            <p>View and Share: <a href={nftLink} className="text-blue-600 underline">{nftLink}</a></p>
            <p>Using a QRCode</p>
            <QRCode value= { nftLink } />
            
            {/* Statistics */}
            {stats ? (
              <div className="mt-6">
                <p>Verification Attempts: <span className="font-semibold">{stats.verificationAttempts}</span></p>
                <p>Shares: <span className="font-semibold">{stats.shareCount}</span></p>
              </div>
            ) : (
              <p>Loading statistics...</p>
            )}

            {/* Social Sharing Buttons */}
            <div className="mt-8">
              <button onClick={shareOnLinkedIn} className="text-sm  mt-8 mx-2 px-3 py-2 rounded-full bg-blue-600  text-white hover:bg-blue-700">Share on LinkedIn</button>
              <button onClick={shareOnTwitter} className="text-sm  mt-8 mx-2 px-3 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">Share on Twitter</button>
              <button onClick={shareOnWhatsApp} className="text-sm  mt-8 mx-2 px-3 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">Share on WhatsApp</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
