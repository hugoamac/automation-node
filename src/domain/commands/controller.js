const logger = require("../../infra/logger");
const values = require("../../infra/values");
/**
 * This class provides the controller for handling calls from endpoints of api commands
 */
class CommandsController {

	/**
	 * This method provides the initialize of @CommandsController
	 * @param {CommandService} service
	 */
	constructor(service) {

		this.service = service;
	}

	/**
	 * This method provides the rule for creating one command
	 * @param {Object - request Express} req 
	 * @param {Object - response Express} res 
	 * @param {Object - next Express} next 
	 */
	async create(req, res, next) {

		const data = req.body;
	}
}

module.exports = CommandsController;
