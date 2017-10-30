// imports orm form config folder
var orm = require('../config/orm');

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
// create the code that will call the ORM functions using burger specific input for the ORM.
// * Export at the end of the `burger.js` file.
module.exports = ice_cream;