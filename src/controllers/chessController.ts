import { Request, Response } from "express";
import ChessGame, { IChessGame } from "../model/chessGame";

export const allGames = (req: Request, res: Response) => {
  ChessGame.find((err: any, games: IChessGame[]) => {
    if (err) {
      res.send("Error!");
    } else {
      res.send(games);
    }
  });
};

export const newGame = (req: Request, res: Response) => {
  const chessGame = new ChessGame({ data: "test test" });

  chessGame.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(chessGame);
    }
  });
};

export const getGame = (req: Request, res: Response) => {
  ChessGame.findById(req.params.id, (err: any, game: IChessGame) => {
    if (err) {
      res.send(err);
    } else {
      res.send(game);
    }
  });
};

export const saveGame = (req: Request, res: Response) => {
  console.log(req.body);

  const chessGame = new ChessGame(req.body);

  ChessGame.findByIdAndUpdate(req.params.id, chessGame, null, (err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Successfully updated book!");
    }
  });
};

export const makeMove = (req: Request, res: Response) => {
  res.send("move");
};
