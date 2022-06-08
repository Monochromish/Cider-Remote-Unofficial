/* eslint-disable eqeqeq */
import * as vscode from 'vscode';
// eslint-disable-next-line @typescript-eslint/naming-convention
var XMLHttpRequest = require('xhr2');

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('cider-remote.play', function () {
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					vscode.window.showInformationMessage(
						`Cider Remote - ${xhttp.responseText}`
					);
				}
			};
			xhttp.open('GET', 'http://localhost:9000/api/playback/play', true);
			xhttp.send();
		}),
		vscode.commands.registerCommand('cider-remote.pause', function () {
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					vscode.window.showInformationMessage(
						`Cider Remote - ${xhttp.responseText}`
					);
				}
			};
			xhttp.open('GET', 'http://localhost:9000/api/playback/pause', true);
			xhttp.send();
		}),
		vscode.commands.registerCommand('cider-remote.toggle', function () {
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					vscode.window.showInformationMessage(
						`Cider Remote - ${xhttp.responseText}`
					);
				}
			};
			xhttp.open('GET', 'http://localhost:9000/api/playback/playpause', true);
			xhttp.send();
		}),
		vscode.commands.registerCommand('cider-remote.stop', function () {
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					vscode.window.showInformationMessage(
						`Cider Remote - ${xhttp.responseText}`
					);
				}
			};
			xhttp.open('GET', 'http://localhost:9000/api/playback/stop', true);
			xhttp.send();
		}),
		vscode.commands.registerCommand('cider-remote.next', function () {
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					vscode.window.showInformationMessage(
						`Cider Remote - ${xhttp.responseText}`
					);
				}
			};
			xhttp.open('GET', 'http://localhost:9000/api/playback/next', true);
			xhttp.send();
		}),
		vscode.commands.registerCommand('cider-remote.previous', function () {
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					vscode.window.showInformationMessage(
						`Cider Remote - ${xhttp.responseText}`
					);
				}
			};
			xhttp.open('GET', 'http://localhost:9000/api/playback/previous', true);
			xhttp.send();
		})
	);
}

export function deactivate() {}
