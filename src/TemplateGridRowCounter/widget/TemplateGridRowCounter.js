/*
    TemplateGridRowCounter
    ========================

    @file      : TemplateGridRowCounter.js
    @version   : 1.0.0
    @author    : Robert van 't Hof
    @date      : 10/30/2015
    @copyright : Mendix 2015
    @license   : Apache 2

    Documentation
    ========================
    This widget lets you place the item number of a template grid cell into the cell itself.
*/

define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "mxui/dom",
    "dojo/dom",
    "dojo/dom-prop",
    "dojo/dom-geometry",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/dom-construct",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/text",
    "dojo/html",
], function(declare, _WidgetBase, dom, dojoDom, dojoProp, dojoGeometry, dojoClass, dojoStyle, dojoConstruct, dojoArray, dojoLang, dojoText, dojoHtml) {
    "use strict";

    return declare("TemplateGridRowCounter.widget.TemplateGridRowCounter", [ _WidgetBase ], {
        postCreate: function () {
			debugger;
        },
});

require(["TemplateGridRowCounter/widget/TemplateGridRowCounter"], function() {
    "use strict";
});
