var React = require('react');
var Table = require("./Table.jsx");
var Navbar = require("./Navbar.jsx");
var ModalContainer = require("../Containers/ModalContainer");
var tableContent = require("../../public/data/asi-list.json");
// var svgFile = require("../../public/svg/1_1.svg");
// console.log(svgFile);

var App = React.createClass({

    render: function () {
        return (
            <div>
                <Navbar ref="navbar" initTableContent={tableContent}/>
                <Table ref="table" content={tableContent}/>
                <ModalContainer></ModalContainer>
            </div>
        );
    },



    componentDidMount: function () {

        var table = this.refs.table;

        var navbar = this.refs.navbar;

        navbar.setState({
            table: table
        });

        // this.refs.navbar.setState({
        //     onClickFunc: function (e) {
        //         e.preventDefault();
        //         table.setState({
        //             content: [{
        //                 "index" : 9,
        //                 "title" : "Гайка РСШ-80",
        //                 "quantity" : 2,
        //                 "mass" : {
        //                     "unit" : 1.7,
        //                     "general" : 3.4
        //                 },
        //                 "place" : "ВП  Кладовая переносных  водоотливных средств",
        //                 "position" : [
        //                     {
        //                         "deck" : 7,
        //                         "coordinates" : ""
        //                     }
        //                 ]
        //             }]
        //         });
        //     }
        // });

        // this.refs.navbar.myFunc();

    }
});

module.exports = App;