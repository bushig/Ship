Компоненты:
<App> - обертка
<Navbar> - Верхнее меню
<Table> - Компонент таблицы
<PlaneSVG> - Карта, зависит от состояния: activeDeck, Rects(список объектов с аттрибутами x, y, size)


Сделать:
<TreeView> - Боковое меню с выбором нужных элементов
///<SVGView> - Отображаются выбранные элементы
<Main> - Обертка для основной части

При нажатии на кнопке-ссылке на карту вызывать функцию для изменения состояния Активной палубы и Ректов


Вынести все состояния вверх иерархии, найти способ получать состояния внизу и изменять глобальные состояния

Данные json:
-Убрать из жсона информацию об general весе(перемножать вес одного элемента на несколько)
-Убрать информацию о количестве - агрегировать все элементы
-В position должен быть список с координатами и уровнем
-Убрать надпись Place и брать его из файла decks-title.json

ПЛАН:
Сделать в таблице в пункте расположение группировку по уровням, у каждого уровня подписано сколько там всего элементов с
 прсмотром всего списка и при нажатии открывать карту со всеми этими элементами, возможно на карте все пункты пронумеровать.
 ИСПОЛЬЗОВАТЬ РЕДАКС