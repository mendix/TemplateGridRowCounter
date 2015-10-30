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
	"dijit/_TemplatedMixin",
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
	"dojo/text!TemplateGridRowCounter/widget/template/TemplateGridRowCounter.html"
], function(declare, _WidgetBase, _templated, dom, dojoDom, dojoProp, dojoGeometry, dojoClass, dojoStyle, dojoConstruct, dojoArray, dojoLang, dojoText, dojoHtml, widgetTemplate) {
    "use strict";

    return declare("TemplateGridRowCounter.widget.TemplateGridRowCounter", [_WidgetBase, _templated], {
		templateString: widgetTemplate,
		
		counterNode : null,
		
        postCreate: function () {
			var node = this,
				counter = -1;
			
			do {
				if (node.name && node.name.startsWith("mx-name-index-")) {
					counter = node.name.split("mx-name-index-")[1];
					break;
				}
			} while (node = node.getParent());
			
			if (counter >= 0) {
				if (!this.startZero)
					counter++;
				
				dojoHtml.set(this.counterNode, counter+"");
			}
        }
	});
});

require(["TemplateGridRowCounter/widget/TemplateGridRowCounter"], function() {
    "use strict";
});