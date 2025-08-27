const express = require("express");
const router = express.Router();

// Import all route modules
//const helloRoute = require("./hello");
//const contactRoute = require("./contact");
const sseRoute = require("./netlifystockedgestream");

// Mount them under /api
//router.use("/hello", helloRoute);
//router.use("/contact", contactRoute);
router.use("/sse", sseRoute);

module.exports = router;
