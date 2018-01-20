// 数独解决方案
import Toolkit from './toolkit'

class Generator {
    constructor() {

    }
    generate() {
        while (!this.internalGenerator()) {
            // TODO
            console.warn('try agin');
            
        }
    }
     
    internalGenerator() {
        this.matrix = Toolkit.matrix.makeMatrix()
        this.orders = Toolkit.matrix.makeMatrix()
                            .map(row => row.map((v, i) => i))
                            .map(row => Toolkit.matrix.shuffle(row))

        for (let n = 1; n < 10; n++) {
            if(!this.fillNumber(n)) {
                return false
            }
        }
        return true
    }
    fillNumber(n) {
        return this.fillRow(n, 0)

    }

    fillRow(n, rowIndex) {
        if(rowIndex > 8) {
            return true
        }
        const row = this.matrix[rowIndex]
        const orders = this.orders[rowIndex]

        for (let i = 0; i < 9; i++) {
            const colIndex = orders[i]

            // 如果这个位置有数据就跳过
            if(row[colIndex]) {
                continue
            }

            // 检查这个位置是否可以填n
            if (!Toolkit.matrix.checkFillable(this.matrix, n, rowIndex, colIndex)) {
                continue
            }

            row[colIndex] = n

            // 去下一行填写n，如果没有填写成功，继续在当前行填写n
            if(!this.fillRow(n, rowIndex + 1)) {
                row[colIndex] = 0
                continue
            }
            return true
        }
        return false
    }
}


export default Generator