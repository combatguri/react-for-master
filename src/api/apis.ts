const expiredSessionTime = 1000 * 60 * 10; // 10분

export function setItemWithExpiry(key: string, value: string | object, ttl: number = expiredSessionTime) {
    console.log(`setItemWithExpiry:`, {
        key,
        value,
        ttl
    });
    const now = new Date();
    const item = {
        value: value,
        expiry: now.getTime() + ttl
    };
    console.log(111, item);
    sessionStorage.setItem(key, JSON.stringify(item));
}

export function getItemWithExpiry(key: string) {
    const itemStr = sessionStorage.getItem(key) as string | null;
    console.log(`getItemWithExpiry:`, {
        key,
        itemStr
    });
    if (!itemStr) {
        return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
        sessionStorage.removeItem(key);
        return null;
    }
    return item.value;
}

export function clearSessionStorage(): void {
    sessionStorage.clear();
}

export function setSessionStorage(key: string, value: string | object): void {
    setItemWithExpiry(key, value);
    // window.sessionStorage.setItem(`${key}`, typeof value !== 'string' ? JSON.stringify(value) : value);
}

export function getSessionStorage(key: string) {
    return JSON.parse(getItemWithExpiry(key));
}
