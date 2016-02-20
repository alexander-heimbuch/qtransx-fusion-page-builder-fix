(function ($) {
    $(window).load(function () {
        var $fusionButton = $('#fusion-pb-switch-button'),
            $languageSwitch = $('.qtranxs-lang-switch-wrap li'),
            isFusionEditor = (function () {
                    return function () {
                        return $('#ddbuilder').is(':visible');
                    };
                })();



        // Intercept click event
        $languageSwitch.each(function () {
            var btn = this,
                $btn = $(this),
                clickHandler = btn.onclick,
                clickCount = 10;
            // Hijack click handler
            btn.onclick = null;

            $btn.on('click', function () {
                // run click handler if the Fusion Editor isn't active
                if (isFusionEditor() === false) {
                    clickHandler.bind(this)();

                    setTimeout(function () {
                        $fusionButton.trigger('click');
                    }, 10);

                    clickCount = 10;
                    return;
                }
                // Beware the endless click
                clickCount -= 1;
                // Disable the Fusion Editor
                $fusionButton.trigger('click');
                // Fire the button event again
                if (clickCount > 0) {
                    $btn.trigger('click');
                }
            });
        });

        // Initial load the fusion core editor
        $fusionButton.trigger('click');
        $languageSwitch.parent().find('.active').trigger('click');
    });
})(jQuery);
