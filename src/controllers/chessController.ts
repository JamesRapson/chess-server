import { Request, Response } from "express";
import ChessGameDB, { IChessGame } from "../model/ChessGameDB";
import { initialiseGame } from "../model/playChessGame";

export const allGames = (req: Request, res: Response) => {
  ChessGameDB.find((err: any, games: IChessGame[]) => {
    if (err) {
      res.send("Error!");
    } else {
      res.send(games);
    }
  });
};

export const newGame = (req: Request, res: Response) => {
  // Create a new game
  const chessGame = initialiseGame();

  const chessGameDB = new ChessGameDB({
    data: JSON.stringify(chessGame),
    code: chessGame.code,
    start: chessGame.start,
  });

  chessGameDB.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(chessGame);
    }
  });
};

export const getGame = (req: Request, res: Response) => {
  ChessGameDB.findOne(
    { code: req.params.code },
    (err: any, doc: IChessGame) => {
      if (err) {
        res.send(err);
      } else {
        res.send(JSON.parse(doc.data));
      }
    }
  );
};

export const saveGame = (req: Request, res: Response) => {
  //console.log("saveGame", req.body);
  const chessGame = JSON.parse(req.body);

  ChessGameDB.findOneAndUpdate(
    { code: req.params.code },
    chessGame,
    null,
    (err: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Successfully updated book!");
      }
    }
  );
};

export const calculateMode = (req: Request, res: Response) => {
  res.send("move");
};
