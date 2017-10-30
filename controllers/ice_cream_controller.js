// imports express nad ice_cream.js
var iceCream = require('../models/ice_cream');

module.exports = function (app) {
    app.get('/', function (req, res) {
        iceCream.selectAll(function (data) {
            // console.log(data);
            var iceCream = data.filter(function (ice_cream) {
                return ice_cream.devoured === 0;
            })
            console.log(iceCream);
            var iceCreamEaten = data.filter(function (ice_cream) {
                return ice_cream.devoured === 1;
            })
            console.log(iceCreamEaten);

            res.render('index', { ice_cream: iceCream, ice_cream_eaten: iceCreamEaten });
        })
    });

    app.post('/', function (req, res) {
        var newIceCream = req.body.ice_cream;
        iceCream.insertOne(newIceCream, function () {
            res.redirect('/')
        })
    });

    app.put("/:id", function (req, res) {
        var idValue = req.params.id;
        // console.log(req.method, req.body, req.path);
        console.log(idValue);
        iceCream.updateOne(idValue, function () {
            res.status(200).end();
        });
    });
}