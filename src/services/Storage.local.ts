import StorageDefault from './Storage';

export const StorageLocal = {
    ...StorageDefault(window.localStorage)
};
