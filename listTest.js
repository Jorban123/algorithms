class LinkedList{
    constructor() {
        this.root = 0
        this.size = 0
    }
    getSize(){
        return this.size
    }
    add(value){
        if(!this.root){
            this.root = new Node(value)
            this.size += 1
            return true
        }
        let node = this.root
        while(node.next){
            node = node.next
        }
        node.next = new Node(value)
        this.size += 1
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

let tree = new LinkedList()
tree.add(1)
tree.add(5)
tree.add(8)
tree.add(1)
tree.add(5)
tree.add(8)
tree.add(1)
tree.add(5)
tree.add(8)
console.log(tree.size)
tree.print()