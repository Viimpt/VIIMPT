import { Contract } from "../../near-interface";

const contract = new Contract({
  contractId: process.env.CONTRACT_NAME,
  walletToUse: wallet,
});

async function getAndShowVotings() {
  document.getElementById("voting-table").innerHTML = "";

  voting.forEach((elem) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <tr>
          <th scope="row">${elem.account_id}</th>
          <td>${elem.total_amount}</td>
        </tr>
      `;
    document.getElementById("voting-table").appendChild(tr);
  });
}

function ResultList() {
  return getAndShowVotings();
}

export default ResultList;
