/**
 * Using the template engine render the values into the template
 */
module.exports = function (objectRepository, viewName) {
    return function (req, res, next) {
        res.end('Default renderjs: ' + viewName);
        //res.render(viewName, res.tpl);
    };
};