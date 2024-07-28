import express from "express";
import postsRouter from "./routes/postRoutes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", postsRouter);

export default app;
