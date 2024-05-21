const expiredStorageTime = 1000 * 60 * 10; // 10분

// 스토리지 interface
interface IStorageItem {
    value: string; // JSON.stringify(value)
    expiry: number; // 만료 시간
}
interface IStorageParam {
    key: string; // 스토리지 key
    value?: string | object; // 스토리지 value
    ttl?: number; // 스토리지 만료시간
    isSession?: boolean; // true:session, false:local(default)
}
interface IStorageInnerParam extends IStorageParam {
    childKey: string; // item 하위 키
}

/**
 * IStorage 타입으로 스토리지에 저장한다.
 * @param key           스토리지 key
 * @param value         스토리지 value
 * @param ttl           스토리지 만료시간
 * @param isSession     true:session, false:local(default)
 */
export function setStorageItemWithExpiry({ key, value, ttl = expiredStorageTime, isSession }: IStorageParam): void {
    const now = new Date();
    const item = {
        // value: typeof value === 'string' ? value : JSON.stringify(value),
        value: value,
        expiry: now.getTime() + ttl
    };
    const storage = isSession ? sessionStorage : localStorage;
    storage.setItem(key, JSON.stringify(item));
}

/**
 * 스토리지 값 get, 만료된 item 삭제
 * @param key           스토리지 key
 * @param isSession     true:session, false:local(default)
 */
export function getStorageItemWithExpiry({ key, isSession = false }: IStorageParam) {
    const storage = isSession ? sessionStorage : localStorage;
    const itemStr = storage.getItem(key) as string | null;
    if (!itemStr) return null;

    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
        storage.removeItem(key);
        return null;
    }
    return item.value;
}

/**
 * 하위 item 으로 넣으며 expired 걸기
 * @param key           스토리지 key
 * @param childKey      스토리지 하위 키
 * @param value         스토리지 value
 * @param ttl           스토리지 만료시간
 * @param isSession     true:session, false:local(default)
 */
export function setStorageInnerItemWithExpiry({ key, childKey, value, ttl = expiredStorageTime, isSession = false }: IStorageInnerParam) {
    const storage = isSession ? sessionStorage : localStorage;
    const itemStr = storage.getItem(key) as string | null;
    const oldItem = itemStr ? JSON.parse(itemStr) : {};
    const now = new Date();
    storage.setItem(
        key,
        JSON.stringify({
            ...oldItem,
            [childKey]: {
                value: typeof value === 'string' ? value : JSON.stringify(value),
                expiry: now.getTime() + ttl
            } as IStorageItem
        })
    );
}

/**
 * 하위 item 으로 검색. expired item 제거
 * @param key           스토리지 key
 * @param childKey      스토리지 하위 키
 * @param isSession     true:session, false:local(default)
 */
export function getStorageInnerItemWithExpiry({ key, childKey, isSession = false }: IStorageInnerParam) {
    const storage = isSession ? sessionStorage : localStorage;
    const itemStr = storage.getItem(key) as string | null;
    if (!itemStr) return null;

    const oldItem = JSON.parse(itemStr);
    const childItem = oldItem[childKey];
    if (!childItem) return null;

    const now = new Date();
    if (now.getTime() > childItem.expiry) {
        delete oldItem[childKey];
        storage.setItem(key, JSON.stringify(oldItem));
        return null;
    }
    return JSON.parse(childItem.value);
}

/**
 * 스토리지 리셋
 * @param isSession     true:session, false:local
 * @param isAll
 */
export function clearStorage({ isSession = false, isAll = false }): void {
    if (isAll) {
        sessionStorage.clear();
        localStorage.clear();
    } else {
        const storage = isSession ? sessionStorage : localStorage;
        storage.clear();
    }
}
