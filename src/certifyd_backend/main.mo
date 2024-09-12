// Importing necessary modules
import Nat "mo:base/Nat";
import Debug "mo:base/Debug";
import Principal "mo:base/Principal";
import Array "mo:base/Array";

// user information
type User = {
  id: Principal;
  username: Text;
  email: Text;
  diplomaNumber: Nat;
};

// Define the NFT data type
type DiplomaInfo = {
  diplomaType: Text;
  institution: Text;
  graduationDate: Text;
  studentName: Text;
  description: Text;
};

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

  // Function to mint a new NFT // Add a new NFT to the array
  public func mint(owner: Principal, metadata: Text, diplomaInfo: DiplomaInfo ): async NFT {
    let newNFT: NFT = {
      id = nextId;
      owner_id = owner;
      metadata = metadata;
      diplomaInfo = diplomaInfo;
    };
    Debug.print(debug_show("--- The NFT N." # Nat.toText(newNFT.id) # " has been created ---"));
    nfts := Array.append<NFT>(nfts, [newNFT]);
    nextId += 1;
    return newNFT;
  };

  // Get a specific user NFT
  public func getNFTsByOwner(owner: Principal): async [NFT] {
    Debug.print(debug_show("--- Getting NFTs by owner " # Principal.toText(owner) # " ---"));
    return Array.filter(nfts, func (nft: NFT): Bool { nft.owner_id == owner });
  };

  // Function to get all NFTs
  public func getAllNFTs(): async [NFT] {
    Debug.print(debug_show("--- Getting all NFTs ---"));
    return nfts;
  };
}
