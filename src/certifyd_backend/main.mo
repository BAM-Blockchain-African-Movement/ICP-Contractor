// Importing necessary modules
import Nat "mo:base/Nat";
import Principal "mo:base/Principal";

// user information
type User = {
  id: Principal;
  username: Text;
  email: Text;
  diplomaNumber: Nat;
}

// Define the NFT data type
type DiplomaInfo = {
  diplomaType: Text;
  institution: Text;
  graduationDate: Text;
  studentName: Text;
  description: Text;
}

type NFT = {
  id: Nat;
  owner_id: Principal;
  metadata: Text;
  diplomaInfo: DiplomaInfo;
};

// Define the MintingCanister actor
actor MintingCanister {
  // Variable to store the NFTs
  var nfts: [NFT] = [];
  var nextId: Nat = 0000;

  // Function to mint a new NFT
  public func mint(owner: Principal, metadata: Text, diplomaInfo: DiplomaInfo ): async NFT {
    let newNFT: NFT = {
      id = nextId;
      owner = owner;
      metadata = metadata;
      diplomaInfo = diplomaInfo;
    };
    nfts := Array.append<NFT>(nfts, [newNFT]);
    nextId += 1;
    return newNFT;
  }

  // Get a specific user NFT
  public func getNFTsByOwner(owner: Principal): async [NFT] {
    return nfts.filter(func (nft): Bool { nft.owner == owner })
  }

  // Function to get all NFTs
  public func getAllNFTs(): async [NFT] {
    return nfts;
  }
}
