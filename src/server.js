import Application from "./app";

const bootstrap = async application => {
  try {
    const app = await application();
    const PORT = 3000;

    app.use((err, req, res, next) => {
      if (err.isBoom) {
        return res.status(err.output.statusCode).json(err.output.payload);
      }
    });

    return app.listen(PORT, () => console.log("server is up!"));
  } catch (error) {
    console.log("server: ", error.message);
  }
};

export default bootstrap;
