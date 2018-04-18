/**
 * Using the template engine render the values into the template
 */
module.exports = function (objectRepository, viewName) {
    return function (req, res, next) {
        console.log(res.tpl)
        res.render(viewName, res.tpl);
    };
};