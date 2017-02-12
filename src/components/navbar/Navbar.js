import React from 'react'

class Navbar extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleChange =this.handleChange.bind(this)
    }
    componentDidMount() {
        //Навешиваем слушатели на каждый пункт меню
        const aHrefArray = document.querySelectorAll(".nav.navbar-nav a[data-border]");

        for (let i = 0; i < aHrefArray.length; i++) {
            aHrefArray[i].addEventListener("click", this.handleClick)
        }
    }

    handleClick(e) {
        e.preventDefault();
        const aHref = e.target;
        const min = aHref.dataset.border.split("-")[0];
        const max = aHref.dataset.border.split("-")[aHref.dataset.border.split("-").length - 1];
        this.props.setFilterRange(min, max);
        document.getElementById('status').innerHTML = aHref.innerHTML.toUpperCase();
    }

    handleChange(e) {
        e.preventDefault();
        let text = e.target.value;
        this.props.setFilterText(text);
    }

    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">АВАРИЙНО СПАСАТЕЛЬНОЕ ИМУЩЕСТВО</a>
                    </div>

                    <ul className="nav navbar-nav">
                        <li><a href="#" data-border="1-700"  >Полный список</a></li>
                        <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Выбор
                            категории<span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#" data-border="1-19">1. Водоотливные переносные средства</a></li>
                                <li><a href="#" data-border="20-149">2. Имущество и материалы для заделки повреждений
                                    корпуса</a></li>
                                <li><a href="#" data-border="150-169">3. Имущество для исправления повреждений
                                    трубопроводов</a></li>
                                <li><a href="#" data-border="170-204">4. Электротехническое имущество</a></li>
                                <li><a href="#" data-border="230-242">5. Средства спасения личного состава</a></li>
                                <li><a href="#" data-border="260-279">6. Водолазное имущество</a></li>
                                <li><a href="#" data-border="300-337">7. Противопожарное имущество</a></li>
                                <li><a href="#" data-border="350">8. Имущество для снятия с мели и буксировки</a></li>
                                <li><a href="#" data-border="370-380">9. Учебно-тренировочные и имитационные
                                    средства</a></li>
                            </ul>
                        </li>
                        <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Нетабельное
                            имущество<span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#" data-border="410-427">1. Дополнительное аварийное снабжение судна
                                    специального назначения</a></li>
                                <li><a href="#" data-border="450-476">2. Дополнительное противопожарное снабжение судна
                                    для борьбы с пожарами на других судах</a></li>
                                <li><a href="#" data-border="490-493">3. Противопожарное снабжение судна для борьбы с
                                    пожарами на шлюпках и рабочем катере</a></li>
                                <li><a href="#" data-border="500-505">4. Снабжение двух спасательных шлюпок вместимостью
                                    не менее 41 чел. каждая</a></li>
                                <li><a href="#" data-border="510">5. Снабжение дежурной шлюпки вместимостью 8 чел.</a>
                                </li>
                                <li><a href="#" data-border="520-521">6. Дополнительное снабжение судна сигнальными
                                    средствами</a></li>
                                <li><a href="#" data-border="540">7. Дополнительное противопожарное снабжение судна</a>
                                </li>
                                <li><a href="#" data-border="560-700">8. Дополнительное аварийное снабжение судна</a>
                                </li>
                            </ul>
                        </li>
                        <li><input style={{marginTop: "7px"}} type="text" className="form-control" onChange={this.handleChange} placeholder="фильтр"/>
                        </li>
                        <li><a id="status">ПОЛНЫЙ СПИСОК</a></li>
                    </ul>
                </div>
            </nav>)

    }
}

export default Navbar