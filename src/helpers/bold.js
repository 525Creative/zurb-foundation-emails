module.exports = function(options) {
    // options.fn(this) = Handlebars content between {{#bold}} HERE {{/bold}}
    var bolder = '<strong>' + options.fn(this) + '</strong>';
    return bolder;
}