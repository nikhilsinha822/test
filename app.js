require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    return res.status(200).send('server running');
});

app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message
    });
});

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
});