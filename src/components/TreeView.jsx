import 'rc-tree/assets/index.css';
import React from 'react';
import Tree, { TreeNode } from 'rc-tree';
import cssAnimation from 'css-animation';

var texts = require("../../public/data/texts/0001.json");

const STYLE = `
.collapse {
  overflow: hidden;
  display: block;
}

.collapse-active {
  transition: height 0.3s ease-out;
}
`;

function animate(node, show, done) {
    let height = node.offsetHeight;
    return cssAnimation(node, 'collapse', {
        start() {
            if (!show) {
                node.style.height = `${node.offsetHeight}px`;
            } else {
                height = node.offsetHeight;
                node.style.height = 0;
            }
        },
        active() {
            node.style.height = `${show ? height : 0}px`;
        },
        end() {
            node.style.height = '';
            done();
        },
    });
}

const animation = {
    enter(node, done) {
        return animate(node, true, done);
    },
    leave(node, done) {
        return animate(node, false, done);
    },
    appear(node, done) {
        return animate(node, true, done);
    },
};

let TreeView = React.createClass({

    getInitialState: function () {
        return {
            regime: this.props.regime === undefined ? null : this.props.regime.split(' ')
        }
    },

    onSelect: function(selectedKeys, info) {
        // console.log('selected', info.node.props.title);
        // this.selKey = info.node.props.eventKey;
        var title = info.node.props.title;

        console.log("selected: ", title, texts[title]);
        console.log(this.refs.text);
        var divWithText = this.refs.text;
        divWithText.innerHTML = "";
        texts[title].forEach(function (item) {
            var li = document.createElement("li");
            li.innerHTML = item;
            divWithText.appendChild(li);
        });



    },

    render: function () {
        return (
            <div className="container">
                <div style={{borderWidth: "5px", borderColor: "black", borderStyle: "solid"}}>
                    <h2>expanded</h2>
                    <style dangerouslySetInnerHTML={{ __html: STYLE }}/>
                    <Tree
                        defaultExpandAll={false}
                        defaultExpandedKeys={['p1']}
                        openAnimation={animation}
                        onSelect={this.onSelect}
                    >
                        {this.state.regime.map(function (item, i) {
                            switch (item.toLowerCase()) {
                                case "обнаружение": return (
                                    <TreeNode title="Обнаружение">
                                        <TreeNode title="Доклад по"/>
                                        <TreeNode title="Герметизация помещения"/>
                                        <TreeNode title="Ликвидация возгорания"/>
                                        <TreeNode title="Действия при невозможности погасить пожар переносными средствами пожаротушения"/>
                                    </TreeNode>
                                );
                                case "оценка": return (
                                    <TreeNode title="Оценка обстановки, организация разведки">
                                        <TreeNode title="Главная задача"/>
                                        <TreeNode title="Первичная оценка"/>
                                        <TreeNode title="Особенности"/>
                                        <TreeNode title="Ограничения"/>
                                        <TreeNode title="Разведка">
                                            <TreeNode title="Организация разведки: подготовить"/>
                                            <TreeNode title="Экипировка разведчиков"/>
                                            <TreeNode title="Ввод разведчиков"/>
                                            <TreeNode title="Задача разведки"/>
                                            <TreeNode title="Маршрут покидания аварийного отсека"/>
                                        </TreeNode>
                                    </TreeNode>
                                );
                                case "локализация": return (
                                    <TreeNode title="Локализация">
                                        <TreeNode title="Первый рубеж обороны">
                                            <TreeNode title="Назначение первого рубежа обороны"/>
                                            <TreeNode title="РОП1В">
                                                <TreeNode title="Установка"/>
                                                <TreeNode title="Охлаждение"/>
                                            </TreeNode>
                                            <TreeNode title="РОП1С">
                                                <TreeNode title="Установка"/>
                                                <TreeNode title="Охлаждение"/>
                                            </TreeNode>
                                            <TreeNode title="РОП1К">
                                                <TreeNode title="Установка"/>
                                                <TreeNode title="Охлаждение"/>
                                            </TreeNode>
                                            <TreeNode title="РОП1Н">
                                                <TreeNode title="Установка"/>
                                                <TreeNode title="Охлаждение"/>
                                            </TreeNode>
                                            <TreeNode title="РОП1ЛВ-Б">
                                                <TreeNode title="Установка"/>
                                                <TreeNode title="Охлаждение"/>
                                            </TreeNode>
                                            <TreeNode title="РОП1П-Б">
                                                <TreeNode title="Установка"/>
                                                <TreeNode title="Охлаждение"/>
                                            </TreeNode>
                                        </TreeNode>
                                        <TreeNode title="Второй рубеж обороны">
                                            <TreeNode title="Назначение второго рубежа обороны"/>
                                        </TreeNode>
                                        <TreeNode title="Действия, выполняемые на рубежах обороны"/>
                                        <TreeNode title="Водоотлив"/>
                                    </TreeNode>
                                );
                                case "ликвидация": return (
                                    <TreeNode title="Ликвидация">
                                        <TreeNode title="Способы борьбы с пожарами"/>
                                        <TreeNode title="Варианты подачи огнегасителя"/>
                                        <TreeNode title="Ввод аварийной партии"/>
                                    </TreeNode>
                                );
                                case "восстановление": return (
                                    <TreeNode title="Восстановление">
                                        <TreeNode title="Вскрытие помещения"/>
                                        <TreeNode title="Удаление воды"/>
                                        <TreeNode title="Устранение завалов"/>
                                        <TreeNode title="Восстановление работоспособности механизмов и систем"/>
                                    </TreeNode>
                                );
                            }
                        })}
                    </Tree>
                </div>

                <div ref="text" className="text" style={{borderWidth: "5px", borderColor: "black", borderStyle: "solid"}}>
                    <ul ref="text"></ul>
                </div>
            </div>
        )
    }
});

module.exports = TreeView;