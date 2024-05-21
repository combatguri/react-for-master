import * as STORAGE from './storage';
import { ICoin, ICoins } from '@pages/coin/Interface';

const fetchOptions = {
    method: 'GET',
    headers: {
        'x-cg-demo-api-key': 'CG-TE3QzKqHSAsfG3f9FjKXCc6N'
        // Accept: "application/json",
        // "Content-Type": "application/json",
        // mode: "no-cors",
    }
};

const BASE_URL = {
    coinpaprika: `https://api.coinpaprika.com/v1`,
    nomadcoders: `https://ohlcv-api.nomadcoders.workers.dev`,
    coingecko: `https://api.coingecko.com/api/v3` //https://docs.coingecko.com/v3.0.1/reference/coins-markets
};

// export async function fetchCoinList2() {
//     const currency = 'usd';
//     const perPage = 20;
//     const nowPage = 1;
//     const res = await fetch(`${BASE_URL.coingecko}/coins/markets?vs_currency=${currency}&per_page=${perPage}&page=${nowPage}`, fetchOptions);
//     return await res.json();
// }

/**
 * 코인 리스트
 */
export async function fetchCoinList(): Promise<ICoins[] | any> {
    const currency = 'usd';
    const perPage = 20;
    const nowPage = 1;

    const key = 'coins:list';
    const storageItem = STORAGE.getStorageItemWithExpiry({ key });
    if (storageItem) {
        // return Promise.resolve(sessionCoinList);
        return storageItem;
    } else {
        const res = await fetch(`${BASE_URL.coingecko}/coins/markets?vs_currency=${currency}&per_page=${perPage}&page=${nowPage}`, fetchOptions);
        const value = await res.json();
        STORAGE.setStorageItemWithExpiry({ key, value });
        return STORAGE.getStorageItemWithExpiry({ key });
    }
}

/**
 * 코인 상세정보
 * @param coinId string
 */
export async function fetchCoinInfo(coinId: string): Promise<ICoin | any> {
    // https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=true&market_data=false&community_data=false&developer_data=false&sparkline=false
    const key = `coin:detail`;
    const childKey = coinId;
    const storageItem = STORAGE.getStorageInnerItemWithExpiry({ key, childKey });
    if (storageItem) {
        return storageItem;
    } else {
        const res = await fetch(`${BASE_URL.coingecko}/coins/${childKey}`, fetchOptions);
        const value = await res.json();
        STORAGE.setStorageInnerItemWithExpiry({ key, childKey, value });
        return STORAGE.getStorageInnerItemWithExpiry({ key, childKey });
    }
}

/**
 * 코인 가격정보
 * https://api.coinpaprika.com/v1/tickers/btc-bitcoin
 * @param coinId string
 */
export async function fetchCoinTickers(coinId: string) {
    const key = `coin:${coinId}:tickers`;
    const storageItem = STORAGE.getStorageItemWithExpiry({ key });
    const res = await fetch(`${BASE_URL.coingecko}/tickers/${coinId}`);
    return await res.json();
}

/**
 * 코인 히스토리
 * https://ohlcv-api.nomadcoders.workers.dev?coinId=btc-bitcoin
 * @param coinId string
 * @returns
 */
export async function fetchCoinHistory(coinId: string) {
    // ohlcv.api 의경우 date 영향 받지 않음
    const endDate = Math.floor(Date.now() / 1000);
    const startDate = endDate - 60 * 60 * 24 * 7;
    const res = await fetch(`${BASE_URL.nomadcoders}?coinId=${coinId}&start=${startDate}&end=${endDate}`);
    return await res.json();
}
