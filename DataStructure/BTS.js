'use strict'

class Node{
    constructor(value =null, left = null, right=null){

        this.left = left;
        this.right = right;
        this.value = value;
    }
}

class BTS{
    constructor(){
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value)
        if(!this.root){
            this.root = newNode
            return this
        }
        let current = this.root
        while(current){
            if(value === current.value) return undefined
            if(current.value > value){
                if(current.left === null){
                    current.left = newNode;
                    break;
                }
              
                    current = current.left;
               
            }
            else  {
                if(current.right === null){
                    current.right = newNode;
                    break;
                }
            
                    current = current.right
              
            }
            
        }

        return this
        
        
    }
    get(value){
        if(this.root === null) return false;
        let current = this.root;
        if(current.value === value){
            return current;
        }

        while(current){
            if(current.value === value){
                return !!current
            }

            if(value < current.value){
                current = current.left;
            }
            else if(value > current.value){
                current = current.right;
            }
            else{
                return undefined;
            }
        }
        
    }
    find(value){
        if(this.root === null) return false;
        let current = this.root, found = false;
        while(current && !found){
            if(value < current.value) current = current.left;
            else if( value > current.value) current = current.right;
            else found = true;
        }
        if(current.value === value) return current;

        return undefined
    }
    BFS(){
      let node = this.root, data = [], queue = [];

      queue.push(node);
      while(queue.length){
        node = queue.shift()
        data.push(node.value)
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
      }
      return data;        
    }
    preOrderDFS(){
        let current = this.root, visited = [];

        function helper(node){
            visited.push(node.value);
            if(node.left !== null) helper(node.left);
            if(node.right !== null) helper(node.right);

        }
        helper(current);
        return visited
    }
    postOrderDFS(){
        let current = this.root, visited = [];

        function helper(node){
            if(node.left !== null) helper(node.left);
            if(node.right !== null) helper(node.right);
            visited.push(node.value);

        }
        helper(current);
        return visited
    }
    inOrderDFS(){
        let current = this.root, visited = [];

        function helper(node){
            if(node.left !== null) helper(node.left);
            visited.push(node.value);
            if(node.right !== null) helper(node.right);
          
            

        }
        helper(current);
        return visited

    }
    
}

let tree = new BTS();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log("BFS ----",tree.BFS())
console.log("DFS preOrderDFS",tree.preOrderDFS())
console.log("DFS postOrder",tree.postOrderDFS())
console.log(tree.inOrderDFS())

// DFS PreOrder 

/**
 * DFS PreOrder
 * entire left side and right
 * 
 * DFS postOrder same but downwards
 * 
 * 
 */