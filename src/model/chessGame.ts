import mongoose = require("mongoose");

const uri: string = "mongodb://127.0.0.1:27017/chess";

mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Successfully Connected!");
  }
});

export interface IChessGame extends mongoose.Document {
  data: string;
}

export const ChessGameSchema = new mongoose.Schema({
  data: { type: String, required: true },
});

const ChessGame = mongoose.model<IChessGame>("ChessGame", ChessGameSchema);
export default ChessGame;
