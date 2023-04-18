import { NetworkId } from 'types/network';

export const EtherscanNetworkNameById: Record<NetworkId, string> = {
    10: 'optimistic',
    42: 'kovan',
    5: 'goerli',
    420: 'goerli-optimism',
    42161: '',
};

const getEtherscanBaseURL = (networkId: NetworkId) => {
    const network = EtherscanNetworkNameById[networkId];

    if (networkId === 42161) {
        return 'https://arbiscan.io/';
    }

    return `https://${network?.toLowerCase()}.etherscan.io`;
};

export const getEtherscanTxLink = (networkId: NetworkId, txId: string) => {
    const baseURL = getEtherscanBaseURL(networkId);

    return `${baseURL}/tx/${txId}`;
};

export const getEtherscanAddressLink = (networkId: NetworkId, address: string) => {
    const baseURL = getEtherscanBaseURL(networkId);

    return `${baseURL}/address/${address}`;
};

export const getEtherscanBlockLink = (networkId: NetworkId, block: string) => {
    const baseURL = getEtherscanBaseURL(networkId);

    return `${baseURL}/block/${block}`;
};

export const getEtherscanTokenLink = (networkId: NetworkId, address: string) => {
    const baseURL = getEtherscanBaseURL(networkId);

    return `${baseURL}/token/${address}`;
};
