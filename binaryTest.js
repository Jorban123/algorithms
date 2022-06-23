class BinaryTree{
    constructor() {
        this.root = 0
    }
    add(value){
        if(!this.root){
            this.root = new TreeNode(value)
            return true
        }
        let node = this.root
        let newNode = new TreeNode(value)
        while(node){
            if(value < node.value){
                if(!node.left){
                    break
                }
                node = node.left
            }else{
                if(!node.right){
                    break
                }
                node = node.right
            }

        }
        if(value > node.value){
            node.right = newNode
        }else{
            node.left = newNode
        }
    }
    print(root = this.root){
        if(!root){
            return true
        }
        console.log(root.value)
        this.print(root.left)
        this.print(root.right)
    }
}

class TreeNode{
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}

const tree = new BinaryTree()
tree.add(3)
tree.add(5)
tree.add(2)
tree.add(8)
tree.add(1)
tree.print()