// 生成九宫格
import Sudoku from '../core/sudoku'
import Checker from '../core/checker'
class Grid {
    constructor(container) {
        this._$container = container
    }

    build() {
        const sudoku = new Sudoku()
        sudoku.make()
        console.log(JSON.stringify(sudoku.solutionMatrix))
        console.log(JSON.stringify(sudoku.puzzleMatrix))
        const matrix = sudoku.puzzleMatrix

        const rowGroupClasses = ["row_g_top", "row_g_middle", "row_g_bottom"]
        const colGroupClasses = ["col_g_left", "col_g_middle", "col_g_right"]

        const $cells = matrix.map(rowValues => rowValues.
            map((cellValue, colIndex) => {
                return $("<span>")
                    .addClass(colGroupClasses[colIndex % 3])
                    .addClass(cellValue ? 'fixed' : 'empty')
                    .text(cellValue)
            }))

        const $divArray = $cells.map(($spanArray, rowIndex) => {
            return $("<div>")
                .addClass("row")
                .addClass(rowGroupClasses[rowIndex % 3])
                .append($spanArray)
        })

        this._$container.append($divArray)
    }

    layout() {
        const width = $('span:first').width()
        $('span').css({
            'line-height': `${width}px`,
            'height': `${width}px`
        })
    }
    // 重新生成迷盘
    rebuild() {
        this._$container.empty()
        this.build()
        this.layout()
    }
    // 检查用户解谜结果
    check() {
        const data = this._$container.children()
            .map((rowIndex, div) => {
                return $(div).children()
                    .map((colIndex, span) => parseInt($(span).text()) || 0)
            })
            .toArray()
            .map($data => $data.toArray())

        const checker = new Checker(data)
        if (checker.check()) {
            return true
        }

        const marks = checker.matrixMarks
        this._$container.children()
            .each((rowIndex, div) => {
                $(div).children().each((colIndex, span) => {
                    const $span = $(span)
                    if ($span.is('fixed') || marks[rowIndex][colIndex]) {
                        $span.removeClass('error')
                    } else {
                        $(span).addClass('error')
                    }

                })
            })
    }
    // 重置用户输入
    reset() {
        this._$container.find("span:not(.fixed)")
            .removeClass("error mark1 mark2")
            .addClass("empty")
            .text(0)
    }
    // 推倒重来
    clear() {
        this._$container.find("span.error")
            .removeClass("error")
    }
    // 重新开始新的一局
    rebuild() {
        this._$container.empty()
        this.build()
        this.layout()
    }

    bindPopup(popupNumbers) {
        this._$container.on('click', 'span', e => {
            const $cell = $(e.target)
            if ($cell.is(".fixed")) {
                return
            }
            popupNumbers.popup($cell)
        })
    }

}
export default Grid