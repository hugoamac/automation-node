const fs = require("fs");
const path = require("path");

class FilesSystemService {

	constructor() {

		this.pathStorage = path.resolve(path.join(__dirname, "/../../storage/", "db.txt"));

	}

	async append(text) {

		return new Promise((resolve, reject) => {

			fs.appendFile(this.pathStorage, text + "\n", (err) => {
				if (err) {
					reject(err);
				}
				resolve(true);
			});
		});
	}

	async read() {

		return new Promise((resolve, reject) => {

			fs.readFile(this.pathStorage, (err, data) => {

				if (err) {
					reject(err);
				}

				let lines = data.toString().split("\n");
				let result = lines.slice(0, lines.length - 1);
				resolve(result);
			})

		});
	}
}

module.exports = FilesSystemService;