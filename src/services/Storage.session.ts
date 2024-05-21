import StorageDefault from './Storage';

export const StorageSession = {
    ...StorageDefault(window.sessionStorage)
};
