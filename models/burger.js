var orm = require("../config/orm.js");

// Create code that will call the orm functions using burger specific input.

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;