// 弹出的操作面板
import Toolkit from "../core/toolkit"

// 处理弹出操作面板
class PopupNumbers {
    constructor($panel) {
        this._$panel = $panel.hide().removeClass("hidden")

        this._$panel.on("click", "span", e => {
            const $cell = this._$targetCell
            const $span = $(e.target)

            if ($span.hasClass("mark1")) {
                if ($cell.hasClass("mark1")) {
                    $cell.removeClass("mark1")
                } else {
                    $cell.removeClass("mark2")
                        .addClass("mark1")
                }
                // 回填样式
            }
            else if ($span.hasClass("mark2")) {
                if ($span.hasClass("mark2")) {
                    if ($cell.hasClass("mark2")) {
                        $cell.removeClass("mark2")
                    } else {
                        $cell.removeClass("mark1")
                            .addClass("mark2")
                    }
                    // 回填样式
                }
            }
            else if ($span.hasClass("empty")) {
                // 取消数字和mark
                $cell.text(0)
                    .addClass("empty")
            }
            else {
                // 回填数字1~9
                $cell.removeClass("empty")
                    .text($span.text())
            }
            this.hide()
        })
    }

    popup($cell) {
        this._$targetCell = $cell
        let { left, top } = $cell.position()
        const maxLeft = $('body').width() - this._$panel.width()
        left = left > maxLeft ? maxLeft : left
        this._$panel.css({
            left: `${left}px`,
            top: `${top}px`
        }).show()

    }

    hide() {
        this._$panel.hide()
    }
}

export default PopupNumbers