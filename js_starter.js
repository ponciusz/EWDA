var jsModuleName = (function($){
    var s;
    return {
        settings: {
            $somejQueryObject:         $('.some-class'),
            $somejQueryObject2:         $('.some-class2')
        },

        init: function() {
            s = this.settings;
            this.bindUIActions();
        },

        bindUIActions: function() {
            jsModuleName.someJSfunction();
        },


        someJSfunction: function() {
            console.log('someJSfunction working!');
            console.log(s.$somejQueryObject);
        }


    }
})(jQuery);
jsModuleName.init();