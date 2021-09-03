const port = process.env.PORT;
const host = process.env.HOST;
const database = process.env.AMAZON_DATABASE;
const password = process.env.AMAZON_PASSWORD;
const Environment = process.env.EVNIRONMENT;

const connectionUrl = `mongodb+srv://CHARAN:${password}@cluster0.gpybh.mongodb.net/${database}?retryWrites=true&w=majority`;

module.exports = {
  port,
  host,
  connectionUrl,
  Environment,
  isDevelopmentEnv: (() => {
    return Environment === "Development";
  })(),
  isProductionEnv: (() => {
    return Environment === "Production";
  })(),
};
