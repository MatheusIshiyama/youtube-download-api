const express = require("express");
const ytdl = require("ytdl-core");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    const ping = new Date();
    ping.setHours(ping.getHours() - 3);
    console.log(`Ping at: ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
    res.sendStatus(200);
});

app.get("/info", async (req, res) => {
    const { url } = req.query;

    const info = (await ytdl.getInfo(url)).videoDetails;

    const title = info.title;
    const thumbnail = info.thumbnails[2].url;

    res.send({ title: title, thumbnail: thumbnail });
});

app.get("/mp3", async (req, res) => {
    const { url } = req.query;

    const videoName = (await ytdl.getInfo(url)).videoDetails.title;

    res.header(
        "Content-Disposition",
        `attachment; filename="${videoName}.mp3"`
    );

    ytdl(url, { format: "mp3" }).pipe(res);
});

app.get("/mp4", async (req, res) => {
    const { url } = req.query;

    const videoName = (await ytdl.getInfo(url)).videoDetails.title;

    res.header(
        "Content-Disposition",
        `attachment; filename="${videoName}.mp4"`
    );

    ytdl(url, { format: "mp4" }).pipe(res);
});

app.listen(process.env.PORT || 3500, () => {
    console.log("Server on");
});
