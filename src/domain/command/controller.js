const logger = require("../../infra/logger");
const values = require("../values");
const Model = require("./model");
/**
 * This class provides the controller for handling calls from endpoints of api commands
 */
class CommandController {

	/**
	 * This method provides the initialize of @CommandController
	 * @param {CommandRepository} repository
	 */
	constructor(repository) {

		this.repository = repository;
	}

	/**
	 * This method provides the rule for creating one command
	 * @param {Object - request Express} req 
	 * @param {Object - response Express} res 
	 */
	async create(req, res) {

		const { cmd, description } = req.body;

		let response = {
			returnCode: values.RETURN_CODE.NOK,
			httpStatus: values.HTTP_STATUS.BAD_REQUEST
		};

		if (!cmd || !description) {
			return res.status(values.HTTP_STATUS.BAD_REQUEST).json(response);
		}

		const model = new Model(Date.now(), cmd, description);

		try {

			await this.repository.save(model);

			response = {
				returnCode: values.RETURN_CODE.OK,
				httpStatus: values.HTTP_STATUS.OK
			};

			return res.status(values.HTTP_STATUS.OK).json(response);

		} catch (e) {

			logger.info(`Error: ${e}`);

			response = {
				returnCode: values.RETURN_CODE.NOK,
				httpStatus: values.HTTP_STATUS.INTERNAL_ERROR
			};

			return res.status(values.HTTP_STATUS.INTERNAL_ERROR).json(response);
		}
	}

	/**
	 * This method provides the rule for lists all commands
	 * @param {Object - request Express} req 
	 * @param {Object - response Express} res 
	 */
	async list(req, res) {

		let response = null;

		try {

			const result = await this.repository.fetchAll();

			response = {
				returnCode: values.RETURN_CODE.OK,
				httpStatus: values.HTTP_STATUS.OK,
				result: result
			};

			return res.status(values.HTTP_STATUS.OK).json(response);

		} catch (e) {

			logger.info(`Error: ${e}`);

			response = {
				returnCode: values.RETURN_CODE.NOK,
				httpStatus: values.HTTP_STATUS.NOK
			};

			return res.status(values.HTTP_STATUS.NOK).json(response);
		}
	}
}

module.exports = CommandController;
