import mongoose from 'mongoose';

const connection = async () => {
  try {
    const DB_HOST = "172.17.0.2";
    const DB_PORT = "27017";
    const DB_NAME = "auth-express-passport-jwt";

    const URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

    return await mongoose.connect(URI);

  } catch (error) {
    console.log("connection:", error.message);
  }
};

export default connection;
