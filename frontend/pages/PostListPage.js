import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import Pagination from "../components/posts/Pagination";
// NEAR
import { Wallet } from "./near-wallet";
import votingCandidates from "../components/post/votingCandidates";
const CONTRACT_ADDRESS = process.env.CONTRACT_NAME;

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
const wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });

// Setup on page load
window.onload = async () => {
  const isSignedIn = await wallet.startUp();
  if (isSignedIn) {
    signedInFlow();
  } else {
    signedOutFlow();
  }

  fetchBeneficiary();
  getAndShowDonations();
};

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <votingCandidates />
      <Pagination />
    </>
  );
};

export default PostListPage;
