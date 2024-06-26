import { NetworkId } from 'types/network';
import { Position } from './options';
import { MultiSingleAmounts, ParlaysMarket } from 'types/markets';

export const QUERY_KEYS = {
    Rewards: (networkId: NetworkId, period: number) => ['rewards', networkId, period],
    Markets: (networkId: NetworkId) => ['markets', networkId],
    ParlayMarkets: (networkId: NetworkId, account: string) => ['parlayMarkets', networkId, account],
    ParlayLeaderboard: (networkId: NetworkId, period: number) => ['parlayLeaderboard', period, networkId],
    SportMarkets: (networkId: NetworkId) => ['sportMarkets', networkId],
    SportMarketsNew: (networkId: NetworkId) => ['sportMarketsNew', networkId],
    ParlayAmmData: (networkId: NetworkId) => ['parlayAmmData', networkId],
    Market: (marketAddress: string, networkId: NetworkId) => ['market', marketAddress, networkId],
    LiveResult: (marketId: string) => ['liveResult', marketId],
    EnetpulseLiveResult: (marketId: string, gameDate: string, sportTag: number) => [
        'enetpulseLiveResult',
        marketId,
        gameDate,
        sportTag,
    ],
    ChildMarkets: (marketAddress: string, networkId: NetworkId) => ['childMarkets', marketAddress, networkId],
    PositionDetails: (
        marketAddress: string,
        position: Position,
        amount: number,
        stableIndex: number,
        networkId: NetworkId
    ) => ['positionDetails', marketAddress, position, amount, stableIndex, networkId],
    MultiplePositionDetails: (
        markets: ParlaysMarket[],
        amounts: MultiSingleAmounts[],
        stableIndex: number,
        networkId: NetworkId
    ) => ['multiplePositionDetails', markets, amounts, stableIndex, networkId],
    AvailablePerPosition: (marketAddress: string) => ['availablePerPosition', marketAddress],
    AvailablePerPositionMulti: (marketAddresses: ParlaysMarket[]) => ['availablePerPositionMulti', marketAddresses],
    AvailablePerDoubleChancePosition: (marketAddress: string) => ['availablePerDoubleChancePosition', marketAddress],
    MarketTransactions: (marketAddress: string, networkId: NetworkId, walletAddress?: string) => [
        'market',
        'transactions',
        marketAddress,
        networkId,
        walletAddress,
    ],
    MarketDuration: (networkId: NetworkId) => ['marketDuration', networkId],
    UserTransactions: (walletAddress: string, networkId: NetworkId) => [
        'user',
        'transactions',
        walletAddress,
        networkId,
    ],
    WinningInfo: (walletAddress: string, networkId: NetworkId) => ['user', 'winningInfo', walletAddress, networkId],
    ClaimTx: (market: string, networkId: NetworkId) => ['claim', 'transactions', market, networkId],
    ClaimableCount: (walletAddress: string, networkId: NetworkId) => [
        'claimable',
        'count',
        'notification',
        walletAddress,
        networkId,
    ],
    AccountPositions: (walletAddress: string, networkId: NetworkId) => ['positions', walletAddress, networkId],
    AccountPositionsProfile: (walletAddress: string, networkId: NetworkId) => [
        'accountPosition',
        walletAddress,
        networkId,
    ],
    ReferralTransaction: (walletAddress: string, networkId: NetworkId) => [
        'referralTransaction',
        walletAddress,
        networkId,
    ],
    ReferrerID: (walletAddress: string) => ['referrerId', walletAddress],
    Referrers: (networkId: NetworkId) => ['referrers', networkId],
    ReferredTraders: (walletAddress: string, networkId: NetworkId) => ['referredTraders', walletAddress, networkId],
    ReferralOverview: (walletAddress: string, networkId: NetworkId) => ['referralOverview', walletAddress, networkId],
    Wallet: {
        GetsUSDWalletBalance: (walletAddress: string, networkId: NetworkId) => [
            'sUsd',
            'balance',
            walletAddress,
            networkId,
        ],
        TokenBalance: (token: string, walletAddress: string, networkId: NetworkId) => [
            'wallet',
            'tokenBalance',
            token,
            walletAddress,
            networkId,
        ],
        MultipleCollateral: (walletAddress: string, networkId: NetworkId) => [
            'multipleCollateral',
            walletAddress,
            networkId,
        ],
        OvertimeVoucher: (walletAddress: string, networkId: NetworkId) => [
            'wallet',
            'overtimeVoucher',
            walletAddress,
            networkId,
        ],
        OvertimeVoucherEscrow: (walletAddress: string, networkId: NetworkId) => [
            'wallet',
            'overtimeVoucherEscrow',
            walletAddress,
            networkId,
        ],
        Stats: (networkId: NetworkId, walletAddress: string) => ['wallet', 'stats', networkId, walletAddress],
        VaultsAndLpTxs: (networkId: NetworkId, walletAddress: string) => [
            'wallet',
            'vaultsAndLpTxs',
            networkId,
            walletAddress,
        ],
    },
    Quiz: {
        Leaderboard: () => ['quiz', 'leaderboard'],
        Tweet: () => ['quiz', 'tweet'],
    },
    FavoriteTeam: (walletAddress: string, networkId: NetworkId) => ['favoriteTeam', walletAddress, networkId],
    Zebro: (networkId: NetworkId) => ['zebro', networkId],
    Vault: {
        Data: (vaultAddress: string, networkId: NetworkId) => [vaultAddress, 'data', networkId],
        UserData: (vaultAddress: string, walletAddress: string, networkId: NetworkId) => [
            vaultAddress,
            'data',
            walletAddress,
            networkId,
        ],
        AllVaultsUserData: (walletAddress: string, networkId: NetworkId) => ['data', walletAddress, networkId],
        Trades: (vaultAddress: string, networkId: NetworkId) => [vaultAddress, 'trades', networkId],
        ParlayTrades: (vaultAddress: string, networkId: NetworkId) => [vaultAddress, 'parlayTrades', networkId],
        PnL: (vaultAddress: string, networkId: NetworkId) => [vaultAddress, 'pnl', networkId],
        UserTransactions: (vaultAddress: string, networkId: NetworkId) => [vaultAddress, 'userTransactions', networkId],
    },
    Bungee: {
        Tokens: () => ['bungee', 'tokens'],
    },
    MarchMadness: (walletAddress: string, networkId: NetworkId) => ['marchMadness', walletAddress, networkId],
    Banners: (networkId: NetworkId) => ['banners', networkId],
    MarchMadnessCompetition: {
        LeaderboardByVolume: (networkId: NetworkId) => ['marchMadnessLeaderboardByVolume ', networkId],
        LeaderboardByNumberOfCorrectPredictions: (networkId: NetworkId) => [
            'marchMadnessLeaderboardByCorrectPred',
            networkId,
        ],
    },
    LiquidityPool: {
        Data: (networkId: NetworkId) => ['liquidityPool', 'data', networkId],
        UserData: (walletAddress: string, networkId: NetworkId) => ['liquidityPool', 'data', walletAddress, networkId],
        PnL: (networkId: NetworkId) => ['liquidityPool', 'pnl', networkId],
        UserTransactions: (networkId: NetworkId) => ['liquidityPool', 'userTransactions', networkId],
    },
};

export default QUERY_KEYS;
