const { ethers } = require("ethers");

const provider = new ethers.providers.Web3Provider(window.ethereum);

async function connect() {
    if (typeof window.ethereum !== "undefined") {
        await window.ethereum.request({ method: "eth_requestAccounts" })
        document.getElementById("connectButton").innerHTML = "Connected!"
    }
}


module.exports = {
    connect
}