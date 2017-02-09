var jsbase = require('borschik/lib/techs/js');

exports.Tech = jsbase.Tech.inherit({

    minimize: function(content) {
        var transform = require('babel-core').transform,
            babiliOptions = this.opts.techOptions.babili || {};

        return transform(content, {
            babelrc: false,
            presets: [['babili', babiliOptions]]
        }).code;
    }

});
