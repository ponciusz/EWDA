/* How To Use

$('.class').starterPlugin({
        FontSize: 40
   });
   
*/

// The semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ($, window, document, undefined) {

    // Defaults
    var pluginName = 'starterPlugin',
        defaults = {
            FontSize: 20
        };

    // The actual plugin constructor
    function starterPlugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    starterPlugin.prototype = {
        // Initializer
        init:       function () {
            var self = this, el = $(this.element), o = this.options;
            var resizeTimer;

            if (el.css('display') !== 'inline') {
                el.css('display', 'inline');
            }
            el.css('font-size', o.FontSize);

            // Run the function
            self.consoleLog();



            $(window).on('resize', function (e) {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function () {
                    self.consoleLog();
                }, 250);
            });


        },
        // The function that does the actual job
        consoleLog: function () {
            var el = $(this.element), o = this.options;
            var elemWidth = el.width();
            var elemID = el.attr('id');
            // console.log(this);
            console.log(elemID + ' width is: ' + elemWidth);
        }
    };


    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new starterPlugin(this, options));
            }
        });
    };

})(jQuery, window, document);