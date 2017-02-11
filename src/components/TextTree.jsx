var React = require("react");
var Accordion = require("react-bootstrap").Accordion;
var Panel = require("react-bootstrap").Panel;
var ListGroup = require("react-bootstrap").ListGroup;
var ListGroupItem = require("react-bootstrap").ListGroupItem;
var Link = require("./Link.jsx");



var TextGroup = React.createClass({

    getInitialState: function() {
        return {
            regime: this.props.regime === undefined ? null : this.props.regime.split(' '),
            defaultActiveKey: 1
        }
    },

    componentDiDMount: function () {
        console.log(this.refs.accordion);
    },

    render: function () {
        var text = require(`../../public/data/texts/${this.props.roomNumber}.json`);
        return (
            <div style={{width: "100%", "padding-top": "10px", "font-size": "125%"}}>
                <Accordion defaultActiveKey={(console.log(this.state.defaultActiveKey), this.state.defaultActiveKey.toString())}>
                    {this.state.regime.map(function (item, i) {
                        switch (item.toLowerCase()) {
                            case "обнаружение": return (
                                <Panel header="Обнаружение" eventKey="1">
                                    <Accordion>
                                        <Panel header="Доклад по средствам связи" eventKey="1">
                                            <ListGroup>
                                                {
                                                    text["Доклад по"].map(function (item) {
                                                        return <ListGroupItem>{item}</ListGroupItem>
                                                    })
                                                }
                                            </ListGroup>
                                        </Panel>
                                        <Panel header="Герметизация помещения" eventKey="2">
                                            <ListGroup>
                                                {
                                                    text["Герметизация помещения"].map(function (item) {
                                                        return <ListGroupItem>{item}</ListGroupItem>
                                                    })
                                                }
                                            </ListGroup>
                                        </Panel>
                                        <Panel header="Ликвидация возгорания" eventKey="3">
                                            <Accordion>
                                                <Panel header="Переносные средства пожаротушения" eventKey="1">
                                                    <table className="table table-bordered table-striped table-fixed-header">
                                                        <thead className="header">
                                                        <tr>
                                                            <th>НАИМЕНОВАНИЕ</th>
                                                            <th>МАССА, кг</th>
                                                            <th>РАСПОЛОЖЕНИЕ</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                                            text["Переносные средства пожаротушения"].map(function (item) {
                                                                return (
                                                                    <tr>
                                                                        <td>{item["title"]}</td>
                                                                        <td>{item["weight"]}</td>
                                                                        <td><Link href={1} deck={1}>{item["position"]}</Link></td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                        </tbody>
                                                    </table>
                                                </Panel>
                                            </Accordion>
                                        </Panel>
                                        <Panel header="Действия при невозможности погасить пожар переносными средствами пожаротушения" eventKey="4">
                                            <ListGroup>
                                                {
                                                    text["Действия при невозможности погасить пожар переносными средствами пожаротушения"].map(function (item) {
                                                        return <ListGroupItem>{item}</ListGroupItem>
                                                    })
                                                }
                                            </ListGroup>
                                        </Panel>
                                    </Accordion>
                                </Panel>
                            );
                            case "оценка": return (
                                <Panel header="Оценка обстановки, организация разведки" eventKey="2">
                                    <Accordion>
                                        <Panel header="Главная задача" eventKey="1">
                                            <ListGroup>
                                                {
                                                    text["Главная задача"].map(function (item) {
                                                        return <ListGroupItem>{item}</ListGroupItem>
                                                    })
                                                }
                                            </ListGroup>
                                        </Panel>
                                        <Panel header="Первичная оценка" eventKey="2">
                                            <ListGroup>
                                                {
                                                    text["Первичная оценка"].map(function (item) {
                                                        return <ListGroupItem>{item}</ListGroupItem>
                                                    })
                                                }
                                            </ListGroup>
                                        </Panel>
                                        <Panel header="Особенности" eventKey="3">
                                            <ListGroup>
                                                {
                                                    text["Особенности"].map(function (item) {
                                                        return <ListGroupItem>{item}</ListGroupItem>
                                                    })
                                                }
                                            </ListGroup>
                                        </Panel>
                                        <Panel header="Ограничения" eventKey="4">
                                            <ListGroup>
                                                {
                                                    text["Ограничения"].map(function (item) {
                                                        return <ListGroupItem>{item}</ListGroupItem>
                                                    })
                                                }
                                            </ListGroup>
                                        </Panel>
                                        <Panel header="Разведка" eventKey="5">
                                            <Accordion>
                                                <Panel header="Организация разведки" eventKey="1">
                                                    <ListGroup>
                                                        {
                                                            text["Организация разведки"].map(function (item) {
                                                                return <ListGroupItem>{item}</ListGroupItem>
                                                            })
                                                        }
                                                    </ListGroup>
                                                </Panel>
                                                <Panel header="Экипировка разведчиков" eventKey="2">
                                                    <ListGroup>
                                                        {
                                                            text["Экипировка разведчиков"].map(function (item) {
                                                                return <ListGroupItem>{item}</ListGroupItem>
                                                            })
                                                        }
                                                    </ListGroup>
                                                </Panel>
                                                <Panel header="Ввод разведчиков" eventKey="3">
                                                    <ListGroup>
                                                        {
                                                            text["Ввод разведчиков"].map(function (item) {
                                                                return <ListGroupItem>{item}</ListGroupItem>
                                                            })
                                                        }
                                                    </ListGroup>
                                                </Panel>
                                                <Panel header="Маршрут следования" eventKey="4">
                                                    <ListGroup>
                                                        {
                                                            text["Маршрут следования"].map(function (item) {
                                                                return <ListGroupItem>{item}</ListGroupItem>
                                                            })
                                                        }
                                                    </ListGroup>
                                                </Panel>
                                                <Panel header="Задачи разведки" eventKey="5">
                                                    <ListGroup>
                                                        {
                                                            text["Задачи разведки"].map(function (item) {
                                                                return <ListGroupItem>{item}</ListGroupItem>
                                                            })
                                                        }
                                                    </ListGroup>
                                                </Panel>
                                            </Accordion>
                                        </Panel>
                                    </Accordion>
                                </Panel>
                            );
                            case "локализация": return (
                                <Panel header="Локализация" eventKey="3">
                                    <Accordion>
                                        <Panel header="Первый рубеж обороны" eventKey="1">
                                            <Accordion>
                                                <Panel header="Назначение первого рубежа обороны" eventKey="1">
                                                    <ListGroup>
                                                        {
                                                            text["Назначение первого рубежа обороны"].map(function (item) {
                                                                return <ListGroupItem>{item}</ListGroupItem>
                                                            })
                                                        }
                                                    </ListGroup>
                                                </Panel>
                                                {
                                                    text["РОП1"].map(function (item, i) {
                                                        return (
                                                            <Panel header={item["title"]} eventKey={i}>
                                                                <Accordion>
                                                                    <Panel header="Установка" eventKey="1">
                                                                        <ListGroup>
                                                                            {
                                                                                item["how"].map(function (item) {
                                                                                    return <ListGroupItem>{item}</ListGroupItem>
                                                                                })
                                                                            }
                                                                        </ListGroup>
                                                                    </Panel>
                                                                    <Panel header="Охлаждение" eventKey="2">
                                                                        <table className="table table-bordered table-striped table-fixed-header">
                                                                            <thead className="header">
                                                                            <tr>
                                                                                <th>ПОЖАРНЫЙ КРАН</th>
                                                                                <th>РАСПОЛОЖЕНИЕ</th>
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            {
                                                                                item["cold"].map(function (item) {
                                                                                    return (
                                                                                        <tr>
                                                                                            <td>{item["title"]}</td>
                                                                                            <td><Link href={1} deck={1}>{item["position"]}</Link></td>

                                                                                        </tr>
                                                                                    )
                                                                                })
                                                                            }
                                                                            </tbody>
                                                                        </table>
                                                                    </Panel>
                                                                </Accordion>
                                                            </Panel>
                                                        )
                                                    })
                                                }
                                            </Accordion>
                                        </Panel>
                                        <Panel header="Второй рубеж обороны" eventKey="2">
                                            <Accordion>
                                                <Panel header="Назначение второго рубежа обороны" eventKey="1">
                                                    <ListGroup>
                                                        {
                                                            text["Назначение второго рубежа обороны"].map(function (item) {
                                                                return <ListGroupItem>{item}</ListGroupItem>
                                                            })
                                                        }
                                                    </ListGroup>
                                                </Panel>
                                            </Accordion>
                                        </Panel>
                                        <Panel header="Действия, выполняемые на рубежах обороны" eventKey="3">
                                            <ListGroup>
                                                {
                                                    text["Действия, выполняемые на рубежах обороны"].map(function (item) {
                                                        return <ListGroupItem>{item}</ListGroupItem>
                                                    })
                                                }
                                            </ListGroup>
                                            <Accordion>
                                                {
                                                    text["Обесточивание из экспертной оценки"].map(function (item, i) {
                                                        return <Panel header="Обесточивание" eventKey={i}>{item}</Panel>
                                                    })
                                                }
                                            </Accordion>
                                        </Panel>
                                        <Panel header="Водоотлив" eventKey="4">
                                            <Accordion>
                                                <Panel header="Водоотлив осуществлять переносными средствами:" eventKey="1">
                                                    <table className="table table-bordered table-striped table-fixed-header">
                                                        <thead className="header">
                                                        <tr>
                                                            <th>НАИМЕНОВАНИЕ</th>
                                                            <th>РАСПОЛОЖЕНИЕ</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                                            text["Переносные водоотливные средства"].map(function (item) {
                                                                return (
                                                                    <tr>
                                                                        <td>{item["title"]}</td>
                                                                        <td><Link href={1} deck={1}>{item["position"]}</Link></td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                        </tbody>
                                                    </table>
                                                </Panel>
                                            </Accordion>
                                            <ListGroup>
                                                {
                                                    text["Перепускаем воду в нижние палубы"].map(function (item) {
                                                        return (
                                                            <ListGroupItem>{item}</ListGroupItem>
                                                        )
                                                    })
                                                }
                                            </ListGroup>
                                        </Panel>
                                    </Accordion>
                                </Panel>
                            );
                            case "ликвидация": return (
                                <Panel header="Ликвидация" eventKey="4">
                                    <Accordion>
                                        <Panel header="Способы борьбы с пожарами" eventKey="1">
                                            <ListGroup>
                                                {
                                                    text["Способы борьбы с пожарами"].map(function (item) {
                                                        return <ListGroupItem>{item}</ListGroupItem>
                                                    })
                                                }
                                            </ListGroup>
                                            <Accordion>
                                                <Panel header="При ликвидации пожара могут быть использованы системы" eventKey="1">
                                                    <table className="table table-bordered table-striped table-fixed-header">
                                                        <thead className="header">
                                                        <tr>
                                                            <th>НАИМЕНОВАНИЕ</th>
                                                            <th>РАСПОЛОЖЕНИЕ</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                                            text["При ликвидации пожара могут быть использованы системы"].map(function (item) {
                                                                return (
                                                                    <tr>
                                                                        <td>{item["title"]}</td>
                                                                        <td><Link href={1} deck={1}>{item["position"]}</Link></td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                        </tbody>
                                                    </table>
                                                </Panel>
                                            </Accordion>
                                        </Panel>
                                        <Panel header="Варианты подачи огнегасителя" eventKey="2">
                                            <ListGroup>
                                                {
                                                    text["Варианты подачи огнегасителя"].map(function (item) {
                                                        return <ListGroupItem>{item}</ListGroupItem>
                                                    })
                                                }
                                            </ListGroup>
                                        </Panel>
                                        <Panel header="Ввод аварийной партии" eventKey="3">
                                            <ListGroup>
                                                {
                                                    text["Ввод аварийной партии"].map(function (item) {
                                                        return <ListGroupItem>{item}</ListGroupItem>
                                                    })
                                                }
                                            </ListGroup>
                                        </Panel>
                                    </Accordion>
                                </Panel>
                            );
                            case "восстановление": return (
                                <Panel header="Восстановление" eventKey="5">
                                    <Accordion>
                                        <Panel header="Вскрытие помещения" eventKey="1">
                                            <ListGroup>
                                                {
                                                    text["Вскрытие помещения"].map(function (item) {
                                                        return <ListGroupItem>{item}</ListGroupItem>
                                                    })
                                                }
                                            </ListGroup>
                                        </Panel>
                                        <Panel header="Удаление воды" eventKey="2">
                                            <ListGroup>
                                                {
                                                    text["Удаление воды"].map(function (item) {
                                                        return <ListGroupItem>{item}</ListGroupItem>
                                                    })
                                                }
                                            </ListGroup>
                                        </Panel>
                                        <Panel header="Устранение завалов" eventKey="3">
                                            <ListGroup>
                                                {
                                                    text["Устранение завалов"].map(function (item) {
                                                        return <ListGroupItem>{item}</ListGroupItem>
                                                    })
                                                }
                                            </ListGroup>
                                        </Panel>
                                        <Panel header="Восстановление работоспособности механизмов и систем" eventKey="4">
                                            <ListGroup>
                                                {
                                                    text["Восстановление работоспособности механизмов и систем"].map(function (item) {
                                                        return <ListGroupItem>{item}</ListGroupItem>
                                                    })
                                                }
                                            </ListGroup>
                                        </Panel>
                                    </Accordion>
                                </Panel>
                            );
                        }
                    })}


                </Accordion>
            </div>
        );
    }
});
module.exports = TextGroup;