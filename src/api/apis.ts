export function setItemWithExpiry(key: string, value: string | object, ttl: number) {
    const now = new Date();
    const item = {
        value: value,
        expiry: now.getTime() + ttl
    };
    sessionStorage.setItem(key, JSON.stringify(item));
}

export function getItemWithExpiry(key: string) {
    const itemStr = sessionStorage.getItem(key);

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

export function setSessionStorage(key: string, value: string | object): void {
    window.sessionStorage.setItem(`${key}`, typeof value !== 'string' ? JSON.stringify(value) : value);
}

export function getSessionStorage(key: string) {
    return JSON.parse(window.sessionStorage.getItem(`${key}`) as string);
}
