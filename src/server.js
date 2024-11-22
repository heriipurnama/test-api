const Hapi = require("@hapi/hapi");
const { signLanguagesRoutes } = require("./routes/signLanguages");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });

  //Register Routes
  server.route(signLanguagesRoutes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();