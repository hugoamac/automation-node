/**
 * This class provides the repository to the domain model @CommandModel
 */
class CommandRepository {

	/**
	 * This method provides the initialize of @CommandRepository
	 */
	constructor(fileSystemService) {
		this.service = fileSystemService;
	}

	/**
	 * This  method has the responsability of saving a command on FileSystem
	 * @param {CommandModel} command 
	 */
	async save(command) {

		return await this.service.append(command.toString());

	}

	/**
	 * This method has the responsability of getting all commands on FileSystem
	 */
	async fetchAll() {

		let collection = [];
		let result = await this.service.read();

		if (result.length > 0) {

			result.forEach(item => {
				collection.push(JSON.parse(item));
			});
		}

		return collection;
	}
}

module.exports = CommandRepository;
