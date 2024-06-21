import { BrowserProvider, Contract, InterfaceAbi, JsonRpcSigner } from "ethers";

declare global {
    interface Window {
        ethereum?: any;
    }
}

const getSigner = async (): Promise<JsonRpcSigner> => {
    if (window.ethereum) {
        const ethereumProvider = new BrowserProvider(window.ethereum);
        return await ethereumProvider.getSigner();
    }
    throw new Error("Failed to detect provider");
};

const connectToContract = async (
    CONTRACT_ID: string,
    abi: InterfaceAbi
): Promise<Contract> => {
    const signer = await getSigner();
    return new Contract(CONTRACT_ID, abi, signer);
};

export default connectToContract;
