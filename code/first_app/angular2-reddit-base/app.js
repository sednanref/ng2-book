System.register(['@angular/platform-browser-dynamic', '@angular/core', './app-02.'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var platform_browser_dynamic_1, core_1, app_02_1;
    var RedditApp;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_02_1_1) {
                app_02_1 = app_02_1_1;
            }],
        execute: function() {
            RedditApp = (function () {
                function RedditApp() {
                }
                RedditApp.prototype.addArticle = function (title, link) {
                    console.log("Adding article title: " + title.value + " and link: " + link.value);
                };
                RedditApp = __decorate([
                    core_1.Component({
                        selector: 'reddit',
                        directives: [app_02_1.ArticleComponent],
                        template: "\n\t\t<form class=\"ui large form segment\">\n\t\t\t<h3 class=\"ui header\">Add a Link</h3>\n\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"title\">Title:</label>\n\t\t\t\t<input name=\"title\" #newtitle>\n\t\t\t</div>\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"link\">Link:</label>\n\t\t\t\t<input name=\"link\" #newlink>\n\t\t\t</div>\n\t\t\t<button (click)=\"addArticle(newtitle, newlink)\"\n\t\t\t\tclass=\"ui positive right floated button\">\n\t\t\t\tSubmit link\n\t\t\t</button>\n\t\t</form>\n\t\t\n\t\t<div class=\"ui grid posts\">\n\t\t\t<reddit-article>\n\t\t\t</reddit-article>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], RedditApp);
                return RedditApp;
            }());
            platform_browser_dynamic_1.bootstrap(RedditApp);
        }
    }
});
//# sourceMappingURL=app.js.map