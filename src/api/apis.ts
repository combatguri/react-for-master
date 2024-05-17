const expiredStorageTime = 1000 * 60 * 1; // 10분

// 스토리지 interface
interface IStorage {
    value: string; // JSON.stringify(value)
    expiry: number; // 만료 시간
}

/**
 * IStorage 타입으로 스토리지에 저장한다.
 * @param key           스토리지 key
 * @param value         스토리지 value
 * @param ttl           스토리지 만료시간
 * @param isSession     세션스토리지:true, 로컬스토리지:false(default)
 */
function setStorageItemWithExpire(key: string, value: string | object, ttl: number = expiredStorageTime, isSession: boolean = false) {
    const now = new Date();
    const item: IStorage = {
        value: typeof value === 'string' ? value : JSON.stringify(value),
        expiry: now.getTime() + ttl
    };
    const storage = isSession ? sessionStorage : localStorage;
    storage.setItem(key, JSON.stringify(item));
}

// 하위 item 으로 넣으며 expired 걸기
export function setStorageInnerItemWithExpire(key: string, childKey: string, value: string | object, ttl: number = expiredStorageTime, isSession: boolean = false) {
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
            } as IStorage
        })
    );
}

// 하위 item 으로 검색할때 expired 제거
export function getStorageInnerItemWithExpire(key: string, childKey: string, isSession: boolean = false) {
    const storage = isSession ? sessionStorage : localStorage;
    const itemStr = storage.getItem(key) as string | null;
    if (!itemStr) {
        return null;
    }
    const oldItem = JSON.parse(itemStr);
    const childItem = oldItem[childKey];
    if (!childItem) {
        return null;
    }
    const now = new Date();
    if (now.getTime() > childItem.expiry) {
        delete oldItem[childKey];
        storage.setItem(key, JSON.stringify(oldItem));
        return null;
    }
    return JSON.parse(childItem.value);
}

/**
 * 스토리지 값 get
 * @param key           스토리지 key
 * @param isSession     세션스토리지:true, 로컬스토리지:false(default)
 */
function getStorageItemWithExpire(key: string, isSession: boolean = false) {
    const storage = isSession ? sessionStorage : localStorage;
    const itemStr = storage.getItem(key) as string | null;
    if (!itemStr) {
        return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
        storage.removeItem(key);
        return null;
    }
    return item.value;
}

export function clearStorage(isSession: boolean = false): void {
    const storage = isSession ? sessionStorage : localStorage;
    storage.clear();
}

export function setSessionStorage(key: string, value: string | object): void {
    setStorageItemWithExpire(key, value);
}

export function getSessionStorage(key: string) {
    return JSON.parse(getStorageItemWithExpire(key));
}
