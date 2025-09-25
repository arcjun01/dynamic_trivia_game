import express from 'express';
const app = express();

app.use((req, res, next) => {
    console.log("Made it to server!");
})

app.use((req, res) => {
    res.status(404).json({
        msg: "Server not found!"
    })
});


const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));