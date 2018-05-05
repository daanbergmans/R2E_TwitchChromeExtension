let appRouter = function (app) {

  const translate = require("google-translate-api");

  app.get("/", function(req, res) {
    res.status(200).send("Root of the R2E RESTful API!");
  });

  app.post("/translation", function(req, res) {
    const textToTranslate = req.body.textToTranslate;

    if (textToTranslate != null && textToTranslate != "") {
      translate(textToTranslate, {to: 'en'}).then(response => {
        res.status(200).send(response.text);
      }).catch(err => {
        console.error(err);
      });
    } else {
      res.status(400).send({ message: 'No valid text specified!' });
    }
  });

}

module.exports = appRouter;
