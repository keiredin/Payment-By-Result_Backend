const express = require("express");
const router = express.Router();

const { login } = require("../controllers/");

router.route("/login").post(login);
