var React = require('react');
var Link = require("./Link.jsx");
var ItemsList = require("./ItemsList");

var Table = React.createClass({

    getInitialState: function () {
        return {
            content: this.props.content,
            activeDeck: 1
        }
    },

    render: function () {
        console.log(this.state);
        return (
            <div className="container">
                <table className="table table-bordered table-striped table-fixed-header">
                    <thead className="header">
                    <tr>
                        <th>ПОЗ.</th>
                        <th>НАИМЕНОВАНИЕ</th>
                        <th>КОЛ.</th>
                        <th>МАССА ЕД, кг</th>
                        <th>МАССА ОБЩ., кг</th>
                        <th>РАСПОЛОЖЕНИЕ</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.content.map(function (item) {
                            var itemsCount = item["items"].length;
                            var unitMass = item["mass"];
                            {/*console.log(item["items"]);*/}
                            return (
                                <tr>
                                    <td>{item["index"]}</td>
                                    <td>{item["title"]}</td>
                                    <td>{itemsCount}</td>
                                    <td>{unitMass}</td>
                                    <td>{unitMass * itemsCount}</td>
                                    <td>
                                        <ItemsList items={item["items"]}/>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
});


//<Link href={item["index"]} deck={item["position"][0]["deck"]}>{item["place"]}</Link>

// var obj = JSON.parse(ASIList);
// console.log(Link);
module.exports = Table;