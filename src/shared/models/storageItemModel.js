export class StorageItem {
    constructor(key = '', value = (event) => {}) {
        this.storageKey = key;
        this.value = value;
    }
}