// Importing necessary modules
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Debug "mo:base/Debug";
import Principal "mo:base/Principal";
import Array "mo:base/Array";
import HashMap "mo:base/HashMap";
import Hash "mo:base/Hash";
import Result "mo:base/Result";

// user information
type User = {
  id: Principal;
  username: Text;
  email: Text;
  passwordHash: Text;
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

  stable var users : [User] = [];


  // Function to handle user signup
    public shared func signup(username: Text, email: Text, passwordHash: Text) : async Bool {
        // Check if user already exists
        let existingUser = Array.find(users, func(user: User) : Bool { user.email == email });
        if (existingUser != null) {
            return false; // User already exists
        };

        // Add new user to the list
        let newUser: User = { id=Principal.fromText(email); username; email; passwordHash };
        users := Array.append(users, [newUser]);

        return true;
    };

// Function to handle user login
    public shared func login(email: Text, password: Text) : async Bool {
        // Check if the user exists with the correct password
        let existingUser = Array.find(users, func(user: User) : Bool { user.email == email and user.passwordHash == password });
        if (existingUser == null) {
            return false; // User not found or password incorrect
        };

        return true;
    };

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

  public func getOwnerNFTsNumber(owner: Principal): async Nat {
    Debug.print(debug_show("--- Getting NFTs by owner " # Principal.toText(owner) # " ---"));
    return Array.size(Array.filter(nfts, func (nft: NFT): Bool { nft.owner_id == owner }));
  };

  // Function to get all NFTs
  public func getAllNFTs(): async [NFT] {
    Debug.print(debug_show("--- Getting all NFTs ---"));
    return nfts;
  };
}
