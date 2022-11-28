/* Talking with a contract often involves transforming data, we recommend you to encapsulate that logic into a class */

import { utils } from "near-api-js";

export class Contract {
  constructor({ contractId, walletToUse }) {
    this.contractId = contractId;
    this.wallet = walletToUse;
  }

  async getBeneficiary() {
    return await this.wallet.viewMethod({
      contractId: this.contractId,
      method: "get_beneficiary",
    });
  }

  async latestvotings() {
    const number_of_voters = await this.wallet.viewMethod({
      contractId: this.contractId,
      method: "number_of_voters",
    });
    const min = number_of_voters > 10 ? number_of_voters - 9 : 0;

    let votings = await this.wallet.viewMethod({
      contractId: this.contractId,
      method: "get_votings",
      args: { from_index: min.toString(), limit: number_of_voters },
    });

    votings.forEach((elem) => {
      elem.total_amount = utils.format.formatNearAmount(elem.total_amount);
    });

    return votings;
  }

  async getvotingFromTransaction(txhash) {
    let voting_amount = await this.wallet.getTransactionResult(txhash);
    return utils.format.formatNearAmount(voting_amount);
  }

  async vote(amount) {
    let deposit = utils.format.parseNearAmount(amount.toString());
    let response = await this.wallet.callMethod({
      contractId: this.contractId,
      method: "vote",
      deposit,
    });
    return response;
  }
}
