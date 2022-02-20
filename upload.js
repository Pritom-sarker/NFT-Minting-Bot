const { create } = require("ipfs-http-client");
const fs = require("fs");
const { ethers } = require("ethers");
var All_IPFS_JSON_LINKS = [];

//--------------------------------------- Provider and Signer Starts Here --------------------------------------------
var provider = new ethers.providers.WebSocketProvider(
  "wss://rinkeby.infura.io/ws/v3/050c5f4ce54a436cac80a00effeb7844",
  "rinkeby"
);
let privateKey =
  "ab7e38d61beb866114641f544da1d5266e53eac1fd4b16efde5bfd5374959a68";
let wallet = new ethers.Wallet(privateKey, provider);
let CONTRACT_ABI = require("./Tools/ABI.json");
let rinkebyAddress = "0xb24A338B8FbB5380AdB9d1406EAF391cfC34A7Bd";
let contract = new ethers.Contract(rinkebyAddress, CONTRACT_ABI, wallet);

URLS = [
  "https://ipfs.io/ipfs/QmRiR7PbTS9F8C5KN1qVvUuE2AkGYBAixS9ALbBHgRMLDh",
  "https://ipfs.io/ipfs/QmecwKB2ctoGiuf6RX3JMjbJ9D6Ss59EMBCjW6tkieefcB",
  "https://ipfs.io/ipfs/QmWtsJCqttBVkCkfUiWLuphXfEaBxTCK8GBz56zUmZ9Y6K",
];

async function upload(URLS) {
  let transaction = await contract.createCollectibleFromList(URLS, 3);
  await transaction.wait();
  console.log(transaction);
  return false;
}

upload(URLS);
