import { IStorageItem, IStorageParam, IStorageChildParam } from './Storage.interface';
import CONST from '@/constants';

export default function StorageDefault(_storage: Storage) {
    return {
        get({ key }: IStorageParam) {
            const itemStr = _storage.getItem(key) as string | null;
            if (!itemStr) return null;

            const item = JSON.parse(itemStr);
            const now = new Date();
            if (now.getTime() > item.expiry) {
                _storage.removeItem(key);
                return null;
            }
            return item.value;
        },
        set({ key, value, ttl = CONST.storage.expiredTime }: IStorageParam) {
            const now = new Date();
            const item = {
                value: typeof value === 'string' ? JSON.parse(value) : value,
                expiry: now.getTime() + ttl
            };
            _storage.setItem(key, JSON.stringify(item));
        },
        getChildren({ key, childKey }: IStorageChildParam) {
            const itemStr = _storage.getItem(key) as string | null;
            if (!itemStr) return null;

            const oldItem = JSON.parse(itemStr);
            const childItem = oldItem[childKey];
            if (!childItem) return null;

            const now = new Date();
            if (now.getTime() > childItem.expiry) {
                delete oldItem[childKey];
                _storage.setItem(key, JSON.stringify(oldItem));
                return null;
            }
            return typeof childItem.value === 'string' ? JSON.parse(childItem.value) : childItem.value;
        },
        setChildren({ key, childKey, value, ttl = CONST.storage.expiredTime }: IStorageChildParam) {
            const itemStr = _storage.getItem(key) as string | null;
            const oldItem = itemStr ? JSON.parse(itemStr) : {};
            const now = new Date();
            _storage.setItem(
                key,
                JSON.stringify({
                    ...oldItem,
                    [childKey]: {
                        // value: typeof value === 'string' ? value : JSON.stringify(value),
                        value: typeof value === 'string' ? JSON.parse(value) : value,
                        expiry: now.getTime() + ttl
                    } as IStorageItem
                })
            );
        },
        remove({ key }: IStorageParam) {
            _storage.removeItem(key);
        },
        clear() {
            _storage.clear();
        }
    };
}
