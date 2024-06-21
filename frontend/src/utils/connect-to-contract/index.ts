import { BrowserProvider, Contract, InterfaceAbi } from "ethers";

declare global {
    interface Window {
        ethereum?: any;
    }
}

const getEthereumProvider = async (): Promise<BrowserProvider> => {
    if (window.ethereum) {
        return new BrowserProvider(window.ethereum);
    }
    throw new Error("Failed to detect provider");
};

const connectToContract = async (
    CONTRACT_ID: string,
    abi: InterfaceAbi
): Promise<Contract> => {
    const ethereumProvider = await getEthereumProvider();
    const signer = await ethereumProvider.getSigner();
    return new Contract(CONTRACT_ID, abi, signer);
};

export default connectToContract;
