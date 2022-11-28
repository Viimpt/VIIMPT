import Carousel from "react-bootstrap/Carousel";
import Button from "../common/Button";
import { Contract } from "./near-interface";
import { Wallet } from "./near-wallet";

// When creating the wallet you can choose to create an access key, so the user
// can skip signing non-payable methods when interacting with the contract
const wallet = new Wallet({ createAccessKeyFor: process.env.CONTRACT_NAME });

// Abstract the logic of interacting with the contract to simplify your project
const contract = new Contract({
  contractId: process.env.CONTRACT_NAME,
  walletToUse: wallet,
});
// On submit, get the greeting and send it to the contract
async function submit() {
  // get elements from the form using their id attribute
  const { fieldset, donation } = event.target.elements;

  // disable the form while the value gets updated on-chain
  fieldset.disabled = true;

  try {
    await contract.voting(voting.value);
  } catch (e) {
    alert(
      "Something went wrong! " +
        "Maybe you need to sign out and back in? " +
        "Check your browser console for more info."
    );
    throw e;
  }

  // re-enable the form, whether the call succeeded or failed
  fieldset.disabled = false;
}

function votingCandidates() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        <Button onClick="submit">투표 </Button>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        <Button onClick="submit">투표 </Button>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
        <Button onClick="submit">투표 </Button>
      </Carousel.Item>
    </Carousel>
  );
}

export default votingCandidates;
