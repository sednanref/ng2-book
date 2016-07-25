import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

@Component({
	selector: 'reddit',
	directives: [ArticleComponent],
	template: `
		<form class="ui large form segment">
			<h3 class="ui header">Add a Link</h3>

			<div class="field">
				<label for="title">Title:</label>
				<input name="title" #newtitle>
			</div>
			<div class="field">
				<label for="link">Link:</label>
				<input name="link" #newlink>
			</div>
			<button (click)="addArticle(newtitle, newlink)"
				class="ui positive right floated button">
				Submit link
			</button>
		</form>
		
		<div class="ui grid posts">
			<reddit-article>
			</reddit-article>
		</div>
	`
})

class RedditApp {
	constructor() {
	}

	addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
		console.log(`Adding article title: ${title.value} and link: ${link.value}`);
	}
}

bootstrap(RedditApp);
