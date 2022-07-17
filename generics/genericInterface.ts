interface Pair<K, V> {
    key: K, 
    value?: V
};

const month: Pair<string, number> = {
    key: "Feb", 
    value: 2
}

interface Collection<T> {
    add(element: T): void;
    remove(element: T): void;
}

class List<T> implements Collection<T> {
    private _items: T[] = [];

    add(element: T): void {
        this._items.push(element);
    }

    remove(element: T): void {
        const index = this._items.indexOf(element);

        if (index > -1) {
            this._items.splice(index, 1);
        }
    }
}

interface Options<T> {
    [name: string]: T
}

let inputOptions: Options<boolean> = {
    'disabled': false,
    'visible': true
};
