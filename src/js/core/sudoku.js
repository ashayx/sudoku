// 生成数独游戏
import Generator from './generator'

class Sudoku {
    constructor() {
        const generator = new Generator()
        generator.generate()
        this.solutionMatrix = generator.matrix
    }
    make(level = 5) {
        this.puzzleMatrix = this.solutionMatrix.map(row => row.map(cell => Math.random() * 9 < level ? 0 : cell))
    }

}
export default Sudoku