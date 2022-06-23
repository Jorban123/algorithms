class Linked_list{
    constructor() {
        this.size = 0
        this.root = 0
    }
    add(value) {
        if (this.size === 0) {
            this.root = new Node(value);
            this.size += 1;
            return true;
        }
        let node = this.root
        while (node.next) {
            node = node.next
        }
        let newNode = new Node(value)
        node.next = newNode
        this.size += 1
    }
    find(value){
        let node = this.root
        let i = 0
        while (node){
            if(node.value === value){
                return `Элемент с индексом ${i}`
            }
            node = node.next
            i += 1
        }
        return "Значения нет"
    }

    getSize(){
        return this.size
    }


    print(){
        let result = []
        let node = this.root
        while(node){
            result.push(node.value)
            node = node.next
        }
        console.log(result)
    }
}

class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

let list = new Linked_list()
list.add(1)
list.add(3)
list.add(4)
list.add(5)

list.print()
console.log(list.find(10))
console.log(list.getSize())