import { StorageItem } from "../shared/models/storageItemModel";

let isListenerAdded = false;

export const useStorageEffect = (browserStorageName = 'localStorage') => {
    const actions = [];
    const memorisedValue = new Map();
    let isStorageFunctionModified = false;

    const parseJson = (json) => {
        try {
            return JSON.parse(json);
        } catch(e) {
            return json
        }
    }

    const listener = (event) => {
        actions.forEach((item) => {
            if(item.storageKey === event.detail.key) {
                item.value(event.detail);
            }
        })
    }

    const customStorageFunction = (key, value) => {
        const isDispatchAllowed = memorisedValue.get(key)
 !== value;
        if (isDispatchAllowed) {
            localStorage[key] = value;
            memorisedValue.set(key, value);
            const customEvent = new CustomEvent('storage', {
                detail: {key, value: parseJson(value)}
            });
            document.dispatchEvent(customEvent);
        };
    };

    return (storageKey, callBack) => {
        actions.push(new StorageItem(storageKey, callBack));

        if (!isStorageFunctionModified) {
            window[browserStorageName].setItem = customStorageFunction;
            isStorageFunctionModified = true;
        }

        if (!isListenerAdded) {
            document.addEventListener('storage', listener);
            isListenerAdded = true;
        }
    }
}