import express from "express";
import * as chessController from "./controllers/chessController";
//import * as cors from "cors";
import * as bodyparser from "body-parser";

const app = express();
app.set("port", process.env.PORT || 4000);

const router = express.Router();

router.use((req, res, next) => {
  // do logging
  console.log("Something is happening.");
  next(); // make sure we go to the next routes and don't stop here
});

app.use("/api", router);
//app.use(cors());
app.use(bodyparser.json());

router.route("/game").get(chessController.allGames);
router.route("/game/new/:name").get(chessController.newGame);
router.route("/game/:code").get(chessController.getGame);
router.route("/save").post(chessController.saveGame);

app.listen(app.get("port"), () => {
  console.log(`server is listening on ${app.get("port")}`);
});
