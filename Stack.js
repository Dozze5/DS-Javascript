class Stack{
    constructor(){
        this.stack = []
    }

    pushStack(ele) {
        this.stack.push(ele);
    }

    popStack(){
        if(this.stack.length > 0){
            return this.stack.pop();
        }
        console.log("Stack UnderFlow");
    }

    peekStack(){
        return this.stack[this.stack.length-1]
    }

    size(){
        return this.stack.length;
    }

    isEmpty(){
        return this.stack.length === 0;
    }

    deleteStack(){
        this.stack = []
    }

    printStack(){
        let str = ''
        for(let i = this.stack.length-1; i >= 0; i--){
            str += this.stack[i] + ' ';
        }
        console.log(str);
    }
};


    let stack1 = new Stack();
    stack1.pushStack(10)
    stack1.pushStack(12)
    stack1.pushStack(14)
    stack1.pushStack(16)
    stack1.pushStack(18)
    stack1.pushStack(20)

    stack1.printStack();

console.log(stack1.popStack());

console.log(stack1.isEmpty())

console.log(stack1.peekStack())


stack1.printStack();

    stack1.deleteStack()

