System.register(['@angular/platform-browser-dynamic', '@angular/core'], function(exports_1, context_1) {
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
    var platform_browser_dynamic_1, core_1;
    var Article, ArticleComponent, RedditApp;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Article = (function () {
                function Article(title, link, votes) {
                    this.title = title;
                    this.link = link;
                    this.votes = votes || 0;
                }
                Article.prototype.voteUp = function () {
                    this.votes += 1;
                };
                Article.prototype.voteDown = function () {
                    this.votes -= 1;
                };
                return Article;
            }());
            ArticleComponent = (function () {
                function ArticleComponent() {
                    this.article = new Article('Angular 2', 'http://angular.io');
                }
                ArticleComponent.prototype.voteUp = function () {
                    this.article.voteUp();
                    return false;
                };
                ArticleComponent.prototype.voteDown = function () {
                    this.article.voteDown();
                    return false;
                };
                ArticleComponent = __decorate([
                    core_1.Component({
                        selector: 'reddit-article',
                        inputs: ['article'],
                        host: {
                            class: 'row'
                        },
                        template: "\n    <div class=\"four wide column center aligned votes\">\n      <div class=\"ui statistic\">\n        <div class=\"value\">\n          {{ article.votes }}\n        </div>\n        <div class=\"label\">\n          Points\n        </div>\n      </div>\n    </div>\n    <div class=\"twelve wide column\">\n      <a class=\"ui large header\" href=\"{{ article.link }}\">\n      {{ article.title }}\n      </a>\n      <ul class=\"ui big horizontal list voters\">\n        <li class=\"item\">\n        <a href (click)=\"voteUp()\">\n          <i class=\"arrow up icon\"></i>\n          upvote\n        </a>\n        </li>\n        <li class=\"item\">\n          <a href (click)=\"voteDown()\">\n            <i class=\"arrow down icon\"></i>\n            downvote\n          </a>\n        </li>\n      </ul>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArticleComponent);
                return ArticleComponent;
            }());
            RedditApp = (function () {
                function RedditApp() {
                    this.articles = [
                        new Article('Angular 2', 'http://angular.io', 3),
                        new Article('Fullstack', 'http://fullstack.io', 2),
                        new Article('Angular Homepage', 'http://angular.io', 1),
                    ];
                }
                RedditApp.prototype.addArticle = function (title, link) {
                    console.log("Adding article title: " + title.value + " and link: " + link.value);
                };
                RedditApp = __decorate([
                    core_1.Component({
                        selector: 'reddit',
                        directives: [ArticleComponent],
                        template: "\n\t\t<form class=\"ui large form segment\">\n\t\t\t<h3 class=\"ui header\">Add a Link</h3>\n\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"title\">Title:</label>\n\t\t\t\t<input name=\"title\" #newtitle>\n\t\t\t</div>\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"link\">Link:</label>\n\t\t\t\t<input name=\"link\" #newlink>\n\t\t\t</div>\n\t\t\t<button (click)=\"addArticle(newtitle, newlink)\"\n\t\t\t\tclass=\"ui positive right floated button\">\n\t\t\t\tSubmit link\n\t\t\t</button>\n\t\t</form>\n\t\t\n\t\t<!-- start adding here -->\n\t\t<div class=\"ui grid posts\">\n\t\t\t<reddit-article\n\t\t\t\t*ngFor=\"let article of articles\"\n\t\t\t\t[article]=\"article\">\n\t\t\t</reddit-article>\n\t\t</div>\n<!-- end adding here -->\n\t"
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