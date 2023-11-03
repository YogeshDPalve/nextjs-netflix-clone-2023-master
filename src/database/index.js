import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dnyptushar:dnyptushar@netflixclone.wbko6pl.mongodb.net/"
    );

    console.log("mongodb is connected");
  } catch (e) {
    console.log(e);
  }
};

export default connectToDB;
