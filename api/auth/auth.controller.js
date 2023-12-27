const logger = require("../../services/logger.service");

async function login(req, res) {
  const { email, password } = req.body;
  try {
    // need to change this
    console.log("inside login");
    const user = { email: "fake.gmail.com", password: "123456" };
    delete user.password;
    req.session.user = user;
    res.json(user);
  } catch (err) {
    logger.error("Failed to login", err);
    res.status(410).send({ err: "Failed to login" });
  }
}

async function logout(req, res) {
  try {
    req.session.user = null;
    res.send({ msg: "Looged out successfully" });
  } catch (err) {
    res.status(500).send({ err: "Failed to logout" });
  }
}

module.exports = {
  login,
  logout,
};
