import { StorageLocal } from '@/services';

import { ICoin, ICoins } from '../interface';

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
    coinPaprika: `https://api.coinpaprika.com/v1`,
    nomadCoders: `https://ohlcv-api.nomadcoders.workers.dev`,
    coinGecko: `https://api.coingecko.com/api/v3` //https://docs.coingecko.com/v3.0.1/reference/coins-markets
};

/**
 * 코인 리스트
 */
export async function fetchCoinList(): Promise<ICoins[]> {
    const currency = 'usd';
    const perPage = 20;
    const nowPage = 1;

    const key = 'coins:list';
    const storageItem = StorageLocal.get({ key }) as ICoins[];

    if (storageItem) {
        return storageItem;
    } else {
        const res = await fetch(`${BASE_URL.coinGecko}/coins/markets?vs_currency=${currency}&per_page=${perPage}&page=${nowPage}`, fetchOptions);
        const value = await res.json();
        StorageLocal.set({ key, value });
        return StorageLocal.get({ key });
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
    const storageItem = StorageLocal.getChildren({ key, childKey });
    if (storageItem) {
        return storageItem;
    } else {
        const res = await fetch(`${BASE_URL.coinGecko}/coins/${childKey}`, fetchOptions);
        const value = await res.json();
        StorageLocal.setChildren({ key, childKey, value });
        return StorageLocal.getChildren({ key, childKey });
    }
}

/**
 * 코인 가격정보
 * https://api.coinpaprika.com/v1/tickers/btc-bitcoin
 * @param coinId string
 */
export async function fetchCoinTickers(coinId: string) {
    const key = `coin:${coinId}:tickers`;
    const storageItem = StorageLocal.get({ key });
    const res = await fetch(`${BASE_URL.coinGecko}/tickers/${coinId}`);
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
    const res = await fetch(`${BASE_URL.nomadCoders}?coinId=${coinId}&start=${startDate}&end=${endDate}`);
    return await res.json();
}
