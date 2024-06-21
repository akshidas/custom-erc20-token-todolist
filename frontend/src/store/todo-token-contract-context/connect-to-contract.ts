import { BrowserProvider, Contract } from "ethers";
import abi from "./abi.json";

const CONTRACT_ID = "0xFb5322855b7950EB3e476BE0bd4b1D32B108fC15";

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
