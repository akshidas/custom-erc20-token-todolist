import { BrowserProvider, Contract } from "ethers";
import abi from "./abi.json";

const CONTRACT_ID = "0x260be31948A53E67C1eAb3C77A565C08786Cf59c";

const getEthereumProvider = async (): Promise<BrowserProvider> => {
    if (window.ethereum) {
        return new BrowserProvider(window.ethereum);
    }
    throw new Error("Failed to detect provider");
};

const connectToContract = async (): Promise<Contract> => {
    const ethereumProvider = await getEthereumProvider();
    const signer = await ethereumProvider.getSigner();
    return new Contract(CONTRACT_ID, abi, signer);
};

export default connectToContract;
