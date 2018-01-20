// 检查数据解决方案
function checkArray(array) {
    const length = array.length
    const marks = new Array(length)
    marks.fill(true)
    for (let i = 0; i < length; i++) {
        const v = array[i];
        if(!marks[i]) {
            continue
        }
        if(!v) {
            marks[i] = false
            continue
        }
        for (let j = i + 1; j < length - 1; j++) {
            if( v === array[j]) {
                marks[i] = marks[j] = false
            } 
            
        }
        
    }
    return marks
}
import Toolkit from './toolkit'

class Checker {
    constructor(matrix) {
        this._matrix = matrix
        this._matrixMarks = Toolkit.matrix.makeMatrix(true)
    }
    get matrixMarks() {
        return this._matrixMarks
    }
    get success() {
        return this._success
    }
    check() {
        this.checkRows()
        this.checkCols()
        this.checkBoxes()

        this._success = this._matrixMarks.every(row => row.every(mark => mark))
        return this._success

    }
    checkRows() {
        for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
            const row = this._matrix[rowIndex]
            const marks = checkArray(row)

            for (let colIndex = 0; colIndex < 9; colIndex++) {
               
                if(!marks[colIndex]) {
                    this._matrixMarks[rowIndex][colIndex] = false
                    
                }
                
            }
        }
    }
    checkCols() {
        for (let colIndex = 0; colIndex < 9; colIndex++) {
            const cols = []

            for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
                cols[rowIndex] = this._matrix[rowIndex][colIndex]
            }

            const marks = checkArray(cols)

            for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
                if(!marks[rowIndex]) {
                    this._matrixMarks[rowIndex][colIndex] = false
                }
                
            }
        }
    }
    checkBoxes() {
        for (let boxIndex = 0; boxIndex < 9; boxIndex++) {
            const box = Toolkit.box.getBoxCells(this._matrix, boxIndex)
            const marks = checkArray(box)
            
            for (let cellIndex = 0; cellIndex < 9; cellIndex++) {
                const {rowIndex, colIndex} = Toolkit.box.convertFromBoxIndex(boxIndex, cellIndex)
                if (!marks[cellIndex]) {
                    this._matrixMarks[rowIndex][colIndex] = false
                }

            }
        }
    }
}
export default Checker



