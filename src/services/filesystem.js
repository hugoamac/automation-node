const fs = require("fs");
const path = require("path");

/**
 * This class provides the all rules to handling files
 */
class FilesSystemService {

	/**
	 * This method provides the initialize of @FilesSystemService
	 */
	constructor() {
		this.pathStorage = path.resolve(path.join(__dirname, "/../../storage/", "db.txt"));
	}

	/**
	 * This method has the responsibility of adding a value in the last line of the db.txt file
	 * @param {String} text 
	 */
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

	/**
	 * This method has to responsability of reading all lines of the db.txt file
	 */
	async read() {

		return new Promise((resolve, reject) => {

			fs.readFile(this.pathStorage, (err, data) => {

				if (err) {
					reject(err);
				}

				let result = [];
				let lines = data.toString().split("\n");

				if (lines.length > 1) {
					result = lines.slice(0, lines.length - 1);
				}

				resolve(result);
			});

		});
	}
}

module.exports = FilesSystemService;
