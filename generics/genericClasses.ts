class Stack<T> {
    private _elements: T[] = [];

    constructor(private _size: number) {
        this._size = _size;
    }

    isEmpty(): boolean {
        return this._elements.length === 0;
    }

    isFull(): boolean {
        return this._elements.length === this._size;
    }

    push(element: T): void {
        if (this.isFull()) {
            throw new Error("The stack is full");
        } 
        this._elements.push(element);
    }

    pop(): T {
        if(this.isEmpty()) {
            throw new Error("The Stack is Empty");
        } 
        return this._elements.pop() as T;
    }
}

const stack = new Stack<number>(10);