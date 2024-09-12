import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory } from './minting_nft_dapp.did.js';

const canisterId = process.env.REACT_APP_MINTING_CANISTER_ID; // Make sure to set this environment variable

// Create an agent to interact with the Internet Computer
const agent = new HttpAgent.create();

// In production, you might want to remove this line to use the default mainnet
// if (process.env.NODE_ENV !== "production") {
//   agent.fetchRootKey();
// }

// Create an actor for the canister
const mintingCanister = Actor.createActor(idlFactory, {
  agent,
  canisterId,
});

// Function to mint a new NFT
export const mintNFT = async (owner, metadata) => {
  try {
    const newNFT = await mintingCanister.mint(owner, metadata);
    return newNFT;
  } catch (error) {
    console.error('Minting failed', error);
    throw error;
  }
};

// Function to mint an NFT with diploma information
export const mintNFTWithDiplomaInfo = async (owner, metadata, diplomaInfo) => {
  try {
    const newNFT = await mintingCanister.mintWithDiplomaInfo(
      owner,
      metadata,
      diplomaInfo
    );
    return newNFT;
  } catch (error) {
    console.error('Minting with diploma information failed', error);
    throw error;
  }
};

// Function to get all NFTs
export const getAllNFTs = async () => {
  try {
    const nfts = await mintingCanister.getAllNFTs();
    return nfts;
  } catch (error) {
    console.error('Failed to fetch all NFTs', error);
    throw error;
  }
};

// Function to get NFTs owned by a specific user
export const getNFTsByOwner = async (owner) => {
  try {
    const userNFTs = await mintingCanister.getNFTsByOwner(owner);
    return userNFTs;
  } catch (error) {
    console.error('Failed to fetch NFTs by owner', error);
    throw error;
  }
};
