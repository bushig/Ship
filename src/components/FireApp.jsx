var React = require('react');
var Text = require("../components/TextTree.jsx");
require("../components/FireApp.css");
var Plane = require("../components/PlaneSVG.jsx");

var App = React.createClass({

    componentDidMount: function () {
        this.updateSizes();
        var _this = this;
        window.onresize = function (event) {
            _this.updateSizes();
        }
    },

    updateSizes: function () {
        //var screenHeight = +screen.height;
        var screenHeight = parseInt(window.innerHeight);
        var headerHeight = parseInt(document.querySelector("#header div").style.height);
        var footerHeight = parseInt(document.querySelector("#footer div").style.height);
        var chromeIntervalHeight = parseInt(document.querySelector("#chrome-interval div").style.height);
        var informationHeight = parseInt(document.querySelector("#information div").style.height);
        document.querySelector("#content .col-sm-7").style.height = screenHeight - footerHeight - headerHeight - chromeIntervalHeight - informationHeight + "px";
        document.querySelector("#content .col-sm-5").style.height = screenHeight - footerHeight - headerHeight - chromeIntervalHeight - informationHeight + "px";
        console.log( document.querySelectorAll("#content .col-sm-5")[1]);
    },

    changeText: function (newRemine) {
        var regims = [
            "обнаружение",
            "оценка",
            "локализация",
            "ликвидация",
            "восстановление"
        ];
        var key = 1 + +regims.indexOf(newRemine.toLowerCase() + "");
        this.refs.text.setState({
            regime: [newRemine],
            defaultActiveKey: key
        });
    },

    render: function () {
        return (
            <div className="container" style={{"margin": "0 auto", "width": "100%"}}>
                <div id="header" className="row">
                    <div className="col-sm-12" style={{"background-color":"rgb(41,59,81)", "height": "50px" , "overflow": "auto"}}>
                        <div className="col-sm-1 text-left" style={{paddingTop: "8px"}}><img src="img/pics/Back.png"></img></div>
                        <div className="col-sm-10" style={{"text-align": "center", "color": "white", "font-size": "30px", "font-family": "Times New Roman"}}>Обнаружение</div>
                        <div className="col-sm-1 text-right" style={{paddingTop: "8px"}}><img src="img/pics/Close.png"></img></div>
                    </div>
                </div>
                <div className="row" id="chrome-interval">
                    <div className="col-sm-12" style={{"background-color":"rgb(41,59,81)", "height": "120px", "overflow": "auto"}}>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-2" >
                            <button type="button" className="btn btn-default" onClick={this.changeText.bind(this, "обнаружение")}>Обнаружение</button>
                        </div>
                        <div className="col-sm-2" >
                            <button type="button" className="btn btn-default" onClick={this.changeText.bind(this, "оценка")}>Оценка</button>
                        </div>
                        <div className="col-sm-2" >
                            <button type="button" className="btn btn-default" onClick={this.changeText.bind(this, "локализация")}>Локализация</button>
                        </div>
                        <div className="col-sm-2" >
                            <button type="button" className="btn btn-default" onClick={this.changeText.bind(this, "ликвидация")}>Ликвидация</button>
                        </div>
                        <div className="col-sm-2" >
                            <button type="button" className="btn btn-default" onClick={this.changeText.bind(this, "восстановление")}>Восстановление</button>
                        </div>

                        <div className="col-sm-1"></div>
                    </div>
                </div>
                <div className="row" id="content">

                    <div className="col-sm-7" style={{"background-color":"rgb(33,40,48)", "overflow": "hidden", "margin": "0", "padding": "0"}}>
                        <div>
                            <Plane imgSrc="img/fire/for_1_obnaruzhenie/3dRoom_3_1.png" />
                        </div>
                    </div>
                    <div className="col-sm-5" style={{"background-color":"rgb(33,40,48)", "overflow": "auto", "margin": "0", "padding": "0"}}>
                        <Text ref="text" roomNumber="0001" regime="обнаружение "/>
                    </div>

                </div>
                <div className="row" id="information">
                    <div className="col-sm-12" style={{"background-color":"rgb(41,59,81)", "height": "120px", "overflow": "auto"}}>
                        <div className="col-sm-4" style={{"font-size": "35px", "color": "white", "padding-top": "30px", "font-family": "Times New Roman"}}>
                            Справочная информация
                        </div>
                        <div className="col-sm-3" >
                            <button type="button" className="btn btn-default">Суд. системы</button>
                        </div>
                        <div className="col-sm-3" >
                            <button type="button" className="btn btn-default" onClick={function () {
                                location.href = "index-asi.html";
                            }}>АСИ</button>
                        </div>
                        <div className="col-sm-2" >
                            <button type="button" className="btn btn-default">Действия л/с</button>
                        </div>
                    </div>
                </div>
                <div className="row" id="footer">
                    <div className="col-sm-12" style={{"background-color":"rgb(41,59,81)", "height": "20px", "overflow": "auto", "text-align": "center", "font-size": "13px", "color": "white"}}>
                        ЗАО "НПФ "АРГОС", г. Санкт-Петербург, 2016
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = App;