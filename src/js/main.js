
import '../css/style.less'
import Grid from './ui/grid'
import PopupNumbers from './ui/popupnumber'


let grid = new Grid($("#containner"))
grid.build()
grid.layout()

const popupNumbers = new PopupNumbers($('#popupNumbers'));
grid.bindPopup(popupNumbers)

$('#check').on('click', e => {
    if (grid.check()) {
        alert("成功");
    }

})
$('#reset').on('click', e => {
    grid.reset()
})
$('#clear').on('click', e => {
    grid.clear()
})
$('#rebuild').on('click', e => {
    grid.rebuild()
})