export const FIFAFavoriteTeam = {
    addresses: {
        5: '',
        10: '0x0a47d5F27149270d45D74abD45FA30E567aB9b7D',
        42: '',
        69: '',
        420: '0xD66eE2D0F8810304402F6bE0E57E7C0a261b54A3',
        42161: '',
    },
    abi: [
        {
            inputs: [
                { internalType: 'string[]', name: '_allowedCountries', type: 'string[]' },
                { internalType: 'string[]', name: '_countryURLs', type: 'string[]' },
                { internalType: 'address', name: '_staking', type: 'address' },
                { internalType: 'uint256', name: '_minimumStake', type: 'uint256' },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: '_whitelistAddress', type: 'address' },
                { indexed: false, internalType: 'bool', name: '_flag', type: 'bool' },
            ],
            name: 'AddedIntoWhitelist',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: true, internalType: 'address', name: 'approved', type: 'address' },
                { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
            ],
            name: 'Approval',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
                { indexed: false, internalType: 'bool', name: 'approved', type: 'bool' },
            ],
            name: 'ApprovalForAll',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint256', name: '_tokenId', type: 'uint256' },
                { indexed: false, internalType: 'address', name: '_exHolder', type: 'address' },
            ],
            name: 'Burn',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: '_recipient', type: 'address' },
                { indexed: false, internalType: 'uint256', name: '_id', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: '_country', type: 'uint256' },
                { indexed: false, internalType: 'string', name: '_countryName', type: 'string' },
                { indexed: false, internalType: 'string', name: '_url', type: 'string' },
            ],
            name: 'Mint',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint256', name: '_minimumAmount', type: 'uint256' }],
            name: 'NewMinimumStakeAmount',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: '_staking', type: 'address' }],
            name: 'NewStakingAddress',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
                { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
            ],
            name: 'OwnershipTransferred',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'bool', name: '_state', type: 'bool' }],
            name: 'Paused',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint256', name: '_country', type: 'uint256' },
                { indexed: false, internalType: 'bool', name: '_flag', type: 'bool' },
            ],
            name: 'SetAllowedCountryNumber',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint256', name: '_country', type: 'uint256' },
                { indexed: false, internalType: 'string', name: '_name', type: 'string' },
            ],
            name: 'SetCountryNameByNumber',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint256', name: '_country', type: 'uint256' },
                { indexed: false, internalType: 'string', name: '_url', type: 'string' },
            ],
            name: 'SetCountryURLByNumber',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'from', type: 'address' },
                { indexed: true, internalType: 'address', name: 'to', type: 'address' },
                { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
            ],
            name: 'Transfer',
            type: 'event',
        },
        {
            inputs: [],
            name: '_name',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: '_symbol',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            name: 'allowedCountryNumber',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
            ],
            name: 'approve',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
            name: 'balanceOf',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
            name: 'burn',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            name: 'countryNameByNumber',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            name: 'countryUrl',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
            name: 'getApproved',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_user', type: 'address' }],
            name: 'getFavoriteTeamForUser',
            outputs: [
                { internalType: 'uint256', name: '_id', type: 'uint256' },
                { internalType: 'string', name: '_name', type: 'string' },
                { internalType: 'string', name: '_url', type: 'string' },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_country', type: 'uint256' }],
            name: 'getListOfUsersPerTeam',
            outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'owner', type: 'address' },
                { internalType: 'address', name: 'operator', type: 'address' },
            ],
            name: 'isApprovedForAll',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_minter', type: 'address' }],
            name: 'isMinterEligibleToMint',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '', type: 'uint256' },
                { internalType: 'uint256', name: '', type: 'uint256' },
            ],
            name: 'listOfUsersByCountry',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'minimumStake',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_recipient', type: 'address' },
                { internalType: 'uint256', name: '_country', type: 'uint256' },
            ],
            name: 'mint',
            outputs: [{ internalType: 'uint256', name: 'newItemId', type: 'uint256' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'name',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'owner',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
            name: 'ownerOf',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'paused',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
            ],
            name: 'safeTransferFrom',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                { internalType: 'bytes', name: 'data', type: 'bytes' },
            ],
            name: 'safeTransferFrom',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_country', type: 'uint256' },
                { internalType: 'bool', name: '_flag', type: 'bool' },
            ],
            name: 'setAllowedCountryNumber',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'operator', type: 'address' },
                { internalType: 'bool', name: 'approved', type: 'bool' },
            ],
            name: 'setApprovalForAll',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_country', type: 'uint256' },
                { internalType: 'string', name: '_name', type: 'string' },
            ],
            name: 'setCountryNameByNumber',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_country', type: 'uint256' },
                { internalType: 'string', name: '_url', type: 'string' },
            ],
            name: 'setCountryURL',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_minimumAmount', type: 'uint256' }],
            name: 'setMinimumStakeAmount',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'bool', name: '_state', type: 'bool' }],
            name: 'setPause',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_staking', type: 'address' }],
            name: 'setStakingAddress',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address[]', name: '_whitelistedAddresses', type: 'address[]' },
                { internalType: 'bool', name: '_flag', type: 'bool' },
            ],
            name: 'setWhitelistedAddresses',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'staking',
            outputs: [{ internalType: 'contract IStakingThales', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
            name: 'supportsInterface',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'symbol',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
            name: 'tokenURI',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
            ],
            name: 'transferFrom',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
            name: 'transferOwnership',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'usersFavoriteTeamId',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'usersFavoriteTeamName',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'usersFavoriteTeamUrl',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'whitelistedAddressesForMinting',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
    ],
};
