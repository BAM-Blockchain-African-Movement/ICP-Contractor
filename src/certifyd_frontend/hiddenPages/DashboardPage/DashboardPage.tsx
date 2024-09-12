import React, { useEffect, useState } from 'react';

interface NFTStats {
  verificationAttempts: number;
  shareCount: number;
}

const DashboardPage = ({ nftId, nftLink }: { nftId: string, nftLink: string }) => {
  const [stats, setStats] = useState<NFTStats | null>(null);

  // Simulate fetching NFT stats
  useEffect(() => {
    const fetchStats = async () => {
      // Simulate API call to get stats
      setTimeout(() => {
        setStats({
          verificationAttempts: 42,
          shareCount: 10,
        });
      }, 1500);
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
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p>Your NFT ID: <span className="text-blue-600">{nftId}</span></p>
        <p>View and Share: <a href={nftLink} className="text-blue-600 underline">{nftLink}</a></p>
        
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
          <button onClick={shareOnLinkedIn} className="btn btn-outline btn-primary mr-4">Share on LinkedIn</button>
          <button onClick={shareOnTwitter} className="btn btn-outline btn-primary mr-4">Share on Twitter</button>
          <button onClick={shareOnWhatsApp} className="btn btn-outline btn-primary">Share on WhatsApp</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
