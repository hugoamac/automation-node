const router = require("express").Router();
const CommandController = require("./controller");
const CommandRepository = require("./repository");

module.exports = (fileSystemService) => {

	const repository = new CommandRepository(fileSystemService);
	const controller = new CommandController(repository);

	/**
	 * This route provides the path to creating of the pub
	 */
	router.post("/", async (req, res) => {

		return await controller.create(req, res);

	});

	/**
	 * This route provides the path to creating of the pub
	 */
	router.get("/", async (req, res) => {

		return await controller.list(req, res);

	});

	return router;
};
