import { ControlerAliment } from "./controller/controllerAliment";
import { ControlerPlat } from "./controller/controllerPlats";
import { ControlerUser } from "./controller/controllerUser";

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

/**
 * On créé une nouvelle "application" express
 */
const app = express();

/**
 * On dit à Express que l'on souhaite parser le body des requêtes en JSON
 *
 * @example app.post('/', (req) => req.body.prop)
 */

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", request.headers.origin);
  response.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  );
  response.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,POST,PUT,DELETE,OPTIONS"
  );
  response.header("Access-Control-Allow-Credentials", "true");
  next();
});

// Default
app.get("/", (req, res) => res.send("🏠"));

// GET Aliments
app.get("/aliments", (req, res) => ControlerAliment.getAliments(req, res));
app.get("/aliments/:id", (req, res) =>
  ControlerAliment.getOneAliments(req, res)
);
app.get("/aliments/type/:type", (req, res) =>
  ControlerAliment.getAlimentsParType(req, res)
);
// GET Plats
app.get("/plats", (req, res) => ControlerPlat.getPlats(req, res));
app.get("/plats/:id", (req, res) => ControlerPlat.getOnPlats(req, res));
app.get("/plats/type/:type", (req, res) =>
  ControlerPlat.getPlatsParType(req, res)
);

// GET Utilisateur
app.get("/user/:identifiant", (req, res) => ControlerUser.getUser(req, res));

// POST Aliments
app.post("/aliments/add", (req, res) =>
  ControlerAliment.insertAliment(req, res)
);
app.put("/aliments/update/:id", (req, res) =>
  ControlerAliment.updateAliment(req, res)
);

// POST Plats
app.post("/plats/add", (req, res) => ControlerPlat.insertPlat(req, res));
app.put("/plats/update/:id", (req, res) => ControlerPlat.updatePlat(req, res));

// POST User
app.post("/user/add", (req, res) => ControlerUser.insertUser(req, res));

// DELETE
app.delete("/aliments/:id", (req, res) =>
  ControlerAliment.deleteAliment(req, res)
);
app.delete("/plats/:id", (req, res) => ControlerPlat.deletePlat(req, res));

app.listen(3000, () => {
  "Serveur listening on port :3000";
});

async function main() {
  await mongoose.connect("mongodb://localhost/Gestion_stock");
  console.log("Connexion mongoose ok");
}
main().catch((err) => console.log(err));

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for JSONPlaceholder",
    version: "1.0.0",
    description:
      "This is a REST API application made with Express. It retrieves data from JSONPlaceholder.",
  },
  servers: [
    { url: "http://localhost:3000/", description: "Development server" },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./*.js", "./controller/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
