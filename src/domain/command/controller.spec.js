const mocha = require("mocha");
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const sinonMockExpress = require("sinon-express-mock");

const FileSystemService = require("../../services/filesystem");
const CommandRepository = require("./repository");
const CommandController = require("./controller");

const values = require("../values");

chai.should();
chai.use(sinonChai);

const expect = chai.expect;
const mockReq = sinonMockExpress.mockReq;
const mockRes = sinonMockExpress.mockRes;

describe("CommandController", () => {

	let filesystem;
	let repository;

	beforeEach(() => {

		filesystem = new FileSystemService();
		repository = new CommandRepository(filesystem);

	});

	describe("~> create()", () => {

		it("It is expected to return status 200 when the command is created", async () => {

			const body = {
				"cmd": "mkdir teste",
				"description": "cria um diretorio"
			};

			const expectedResultSave = true;

			const saveStub = sinon.stub(repository, "save");
			saveStub.withArgs(body).returns(expectedResultSave);

			const req = mockReq({ body });
			const res = mockRes();

			const controller = new CommandController(repository);
			const response = await controller.create(req, res);

			sinon.assert.called(saveStub);

			expect(response.status).to.be.calledWith(values.HTTP_STATUS.OK);
			expect(response.json).to.be.calledWith({
				returnCode: values.RETURN_CODE.OK,
				httpStatus: values.HTTP_STATUS.OK
			});

			saveStub.restore();

		});

		it("It is expected to return status 400 when the cmd or description field is not sent", async () => {

			const req = mockReq();
			const res = mockRes();

			const controller = new CommandController(repository);
			const response = await controller.create(req, res);

			expect(response.status).to.be.calledWith(values.HTTP_STATUS.BAD_REQUEST);

		});

	});

	describe("~> list()", () => {

		it("It is expected to return status 200 when the list of commands is returned", async () => {

			const expectedResultFetchall = [];

			const fecthAllStub = sinon.stub(repository, "fetchAll");
			fecthAllStub.withArgs().returns(expectedResultFetchall);

			const req = mockReq();
			const res = mockRes();

			const controller = new CommandController(repository);
			const response = await controller.list(req, res);

			sinon.assert.called(fecthAllStub);

			expect(response.status).to.be.calledWith(values.HTTP_STATUS.OK);
			expect(response.json).to.be.calledWith({
				httpStatus: values.HTTP_STATUS.OK,
				returnCode: values.RETURN_CODE.OK,
				result: expectedResultFetchall
			});

			fecthAllStub.restore();

		});

	});
});
