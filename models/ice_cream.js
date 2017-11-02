// imports orm form config folder
var orm = require('../config/orm');

// creates the code that will call the ORM functions using ice cream specific input for the ORM.
var ice_cream = {
    selectAll: function (func) {
        orm.selectAll('ice_cream', func);
    },
    insertOne: function (newIceCream, func) {
        orm.insertOne('ice_cream', 'ice_cream_name', newIceCream, func);
    },
    updateOne: function (idValue, func) {
        orm.updateOne('ice_cream', 'id', idValue, 'devoured', func)
    }
}

module.exports = ice_cream;