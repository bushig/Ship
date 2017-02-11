var React = require("react");
var $ = require("jquery");

var Navbar = React.createClass({

    getInitialState: function () {
        return {
            table: null,
            initTableContent: this.props.initTableContent,
            currTableContent: this.props.initTableContent,
            currentTheme: "Полный список".toUpperCase()
        }
    },


    onClick: function (e) {
        e.preventDefault();
        var aHref = e.target;
        var table = this.state.table;
        var initTableContent = this.state.initTableContent;

        var min = aHref.dataset.border.split("-")[0];
        var max = aHref.dataset.border.split("-")[aHref.dataset.border.split("-").length - 1];
        // console.log(min, max);

        var newContent = [];
        initTableContent.map(function (item, i) {
            // console.log(`index = ${i} -- min = ${min}`);
            if (+item.index >= +min && +item.index <= +max) {
                newContent.push(item);
            }
        });
        console.log(newContent);
        table.setState({
            content: newContent,
        });
        console.log(table.state.content);
        this.setState({
            currentTheme: e.target.innerHTML.toUpperCase(),
            currTableContent: newContent
        });
        // this.refs.filterInput.change();
        this.filterFunction(null, this.refs.filterInput.value)
    },

    filterFunction: function (e, filterText) {
        // console.dir(e.target);
        var inputValue = e === null ? filterText : e.target.value;
        // console.log(inputValue);
        var table = this.state.table;
        // var initTableContent = this.state.initTableContent;
        var initTableContent = this.state.currTableContent;
        var newContent = [];
        initTableContent.map(function (item, i) {
            if (item.title.toLowerCase().indexOf(inputValue.toLowerCase()) != -1) {
                newContent.push(item);
            }
        });
        table.setState({
            content: newContent
        });
    },

    render: function () {
        var styleInput = {
            marginTop: "7px"
        };
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">АВАРИЙНО СПАСАТЕЛЬНОЕ ИМУЩЕСТВО</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#" data-border="1-700">Полный список</a></li>
                        <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Выбор категории<span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#" data-border="1-19">1. Водоотливные переносные средства</a></li>
                                <li><a href="#" data-border="20-149">2. Имущество и материалы для заделки повреждений корпуса</a></li>
                                <li><a href="#" data-border="150-169">3. Имущество для исправления повреждений трубопроводов</a></li>
                                <li><a href="#" data-border="170-204">4. Электротехническое имущество</a></li>
                                <li><a href="#" data-border="230-242">5. Средства спасения личного состава</a></li>
                                <li><a href="#" data-border="260-279">6. Водолазное имущество</a></li>
                                <li><a href="#" data-border="300-337">7. Противопожарное имущество</a></li>
                                <li><a href="#" data-border="350">8. Имущество для снятия с мели и буксировки</a></li>
                                <li><a href="#" data-border="370-380">9. Учебно-тренировочные и имитационные средства</a></li>
                            </ul>
                        </li>
                        <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Нетабельное имущество<span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#" data-border="410-427">1. Дополнительное аварийное снабжение судна специального назначения</a></li>
                                <li><a href="#" data-border="450-476">2. Дополнительное противопожарное снабжение судна для борьбы с пожарами на других судах</a></li>
                                <li><a href="#" data-border="490-493">3. Противопожарное снабжение судна для борьбы с пожарами на шлюпках и рабочем катере</a></li>
                                <li><a href="#" data-border="500-505">4. Снабжение двух спасательных шлюпок вместимостью не менее 41 чел. каждая</a></li>
                                <li><a href="#" data-border="510">5. Снабжение дежурной шлюпки вместимостью 8 чел.</a></li>
                                <li><a href="#" data-border="520-521">6. Дополнительное снабжение судна  сигнальными  средствами</a></li>
                                <li><a href="#" data-border="540">7. Дополнительное противопожарное снабжение судна</a></li>
                                <li><a href="#" data-border="560-700">8. Дополнительное аварийное  снабжение судна</a></li>
                            </ul>
                        </li>
                        <li><input ref="filterInput" style={styleInput} onChange={this.filterFunction} id="email" type="text" className="form-control" name="email" placeholder="фильтр"/></li>
                        <li><a>{this.state.currentTheme}</a></li>
                    </ul>
                </div>
            </nav>
        );
    },

    componentDidMount: function () {
        var aHrefArray = document.querySelectorAll(".nav.navbar-nav a[data-border]");
        // console.log(Array.isArray(aHrefArray));
        for (var i = 0; i < aHrefArray.length; i++) {
            aHrefArray[i].addEventListener("click", this.onClick)
        }

        // console.dir(this.refs.filterInput);
    }
});
module.exports = Navbar;