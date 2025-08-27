const { createServer } = require('https');
const { parse } = require('url');
const fs = require('fs');
const express = require("express");
const next = require("next");
const apiRoutes = require("./src/routes"); 

const dev = process.env.NODE_ENV !== "production";
  const port = process.env.PORT || 10000;
const app = next({ dev });
const handle = app.getRequestHandler();
let  parsedUrl = '';
const httpsOptions = {
    key: fs.readFileSync('../src/ssl.key/server.key'),
  cert: fs.readFileSync('../src/ssl.crt/server.crt'),
};



app.prepare().then(() => {

    const expressApp = express();
  /*  (req, res) => {
       parsedUrl = parse(req.url, true);
     // handle(req, res, parsedUrl);
    }
  */

     // Mount API routes under /api/*
  expressApp.use("/api", apiRoutes);

  // Next.js handles everything else
  expressApp.all("*", (req, res) => {
    return handle(req, res, parse(req.url, true));
  });

      
    createServer(httpsOptions,expressApp ).listen(port, hostname, () => {
      console.log(`> Dev HTTPS server ready at https://${hostname}:${port}`);
    });

  // Example migrated Netlify function
  /*server.get("/api/hello", (req, res) => {
    res.json({ msg: "Hello from Express API!" });
  });

  // Another migrated Netlify function
  server.post("/api/contact", (req, res) => {
    res.json({ status: "Contact form received" });
  });

   // Mount API routes under /api/*
  expressApp.use("/api", apiRoutes);

  // Next.js handles everything else
  server.all("*", (req, res) => handle(req, res, parsedUrl));
   */

/*  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });*/
});
