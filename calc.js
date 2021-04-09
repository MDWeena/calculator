class Calculator {
    constructor(prevOpsText, curOpsText){
        this.prevOpsText = prevOpsText
        this.curOpsText = curOpsText
        this.clear
    }

    clear(){
        this.curOpsText.innerText = this.curOps = ''
        this.prevOpsText.innerText = this.prevOps = ''
        this.operation = undefined
    }

    delete(){
        this.curOpsText.innerText = this.curOpsText.innerText.slice(0,-1)
    }

    appendNum(number){
        if (number == '.' && this.curOpsText.innerText.includes('.')){
        return this.curOps = ''
        }
        this.curOps = number    
        this.curOpsText.innerText += this.curOps

        }
        
    chooseOps(operation){
        if (prevOpsText !== ''){ this.compute()}
        this.operation = operation
        this.prevOpsText.innerText = this.curOpsText.innerText
        this.curOpsText.innerText = this.curOps = ''
    }

    compute(){
        let computation
        const prev = parseFloat(this.prevOpsText.innerText) 
        const cur = parseFloat(this.curOpsText.innerText)
        if (isNaN(prev) || isNaN(cur))return
        switch (this.operation){
            case '+':
                computation = prev + cur
                break
            case '-':
                computation = prev - cur
                break
            case 'x':
                computation = prev * cur
                break
            case '÷':
                computation = prev / cur
                break
            default:
                return
        }
        this.curOpsText.innerText = computation
        //this.operation = undefined
        this.prevOpsText.innerText = ''
    }
/*
    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else{
            integerDisplay = integerDigits.toLocaleString('en',{
                maximumFractionDigits: 0
            })
        }
        if (decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        }else{
            return integerDisplay
        }
    }
    */
   
    updateDisplay(){
        this.curOpsText.innerText = this.curOps
        if(this.operation != null){
            this.prevOpsText.innerText
             = `${this.getDisplayNumber(this.prevOpsText.innerText)} ${this.operation}`
        } else {
            this.prevOpsText.innerText = ''
        }
    }
}

const numBut = document.querySelectorAll('[data-number]');
const opsBut = document.querySelectorAll('[data-operation]');
const equalBut = document.querySelector('[data-equals]');
const delBut  = document.querySelector('[data-delete]');
const allClearBUt = document.querySelector('[data-all-clear]');
const prevOpsText = document.querySelector('[data-previous]');
const curOpsText = document.querySelector('[data-current]');

const calculator = new Calculator(prevOpsText, curOpsText)

numBut.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNum(button.innerText)
        //calculator.updateDisplay()
    })
})

opsBut.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOps(button.innerText)
        calculator.updateDisplay()
    })
})

equalBut.addEventListener('click', () => {
    calculator.compute()
    //calculator.updateDisplay()
})

allClearBUt.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})

delBut.addEventListener('click', () => {
    calculator.delete()
    //calculator.updateDisplay()
})