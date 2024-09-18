const User = require("./../models/userModel");

exports.register = async (req, res) => {
	//check if user already exists ..
	const { name, email, phone, password } = req.body;
	const isExistingUser = await User.findOne({ email });

	if (isExistingUser) {
		res.status(400).json({
			message: "User already exists",
		});
	}
	const user = await user.create(req.body);

	if (user) {
		res.status(201).json({
			data: user,
		});
	}
};