require.config({
    paths: {
        "jquery": "../jquery-1.6.2.min",
        "jquery_SuperSlide": "../jquery.SuperSlide.2.1.1",
        "handlebar": "../handlebars-v4.0.11",
        "jquery_url": "../jquery.url",
    },
    shim: {
        'jquery_SuperSlide': ['jquery'],
        'jquery_url': ['jquery'],
    }
});

require(['jquery', 'jquery_SuperSlide', 'handlebar', 'jquery_url', './common', 'detail'],
    function (jquery, jquery_SuperSlide, handlebar, jquery_url, common, detail) {
        $(function () {
            detail.getGoodDetail();
        });
    });