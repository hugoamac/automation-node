/**
 * This class represents the domain model to the command domain
 */
class CommandModel {

	/**
	 * This method provides the initialize of @CommandsModel
	 */
	constructor(id, cmd, description) {
		this.id = id;
		this.cmd = cmd;
		this.description = description;
	}

	/**
	 * This method provides the string formatter to @CommandsModel
	 */
	toString() {
		return JSON.stringify({ id: this.id, cmd: this.cmd, description: this.description });
	}
}

module.exports = CommandModel;
