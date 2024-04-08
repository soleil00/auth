import app from "./app";
import env from "./environment/env";
const PORT = process.env.PORT || 3000;

app.listen(env.port, () => {
  console.log(`Server is running on port ${PORT}`);
});
