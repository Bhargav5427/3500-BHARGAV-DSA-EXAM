
class queue {
    constructor() {
        this.items = [];
        this.size = 5;
        this.head = 0;
        this.tail = this.items.length - 1;
    }
    ISempty(){
        if (this.tail === 0) {
            console.log("queue is empty");
        }
        else{
            console.log("queue is not empty");
        }
    }
    print() {
        console.log(this.items);
    }
    push(element) {
        this.items[this.items.length] = element;
    }
    shift() {
        if (this.items.length == 1) {
            console.log("one element is required");
        }
        else {
            for (let i = 0; i < this.items.length - 1; i++) {
                this.items[i] = this.items[i + 1];
            }
            this.items.length = this.items.length - 1
        }
    }
}
const data = new queue();

// push method
data.push(1)
data.push(2)
data.push(3)
data.push(4)
data.push(5)

// pop method
data.shift()
data.shift()

// print
data.print()

// isempty
// data.ISempty()
