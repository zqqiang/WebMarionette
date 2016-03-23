var $ = require('jquery');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactDom = require('react-dom');
var QRCodeView = require('../components/qrcode.react');

var QRCode = Marionette.ItemView.extend({
    template: false,
    id: 'qrcode-main',
    className: '',
    onShow: function() {
        var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
        var window_height = $(window).height();
        $(".content-wrapper, .right-side").css('min-height', window_height - neg);

        ReactDom.render(
            <QRCodeView />,
            document.getElementById('qrcode-main')
        );
    }
});

module.exports = QRCode;
