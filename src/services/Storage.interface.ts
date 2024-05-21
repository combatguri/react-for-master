// 스토리지 interface
export interface IStorageItem {
    value: string; // JSON.stringify(value)
    expiry: number; // 만료 시간
}

export interface IStorageParam {
    key: string; // 스토리지 key
    value?: string | object; // 스토리지 value
    ttl?: number; // 스토리지 만료시간
}

export interface IStorageChildParam extends IStorageParam {
    childKey: string; // item 하위 키
}
