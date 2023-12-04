const express = require('express');
const app = express();
const port = 6000;

app.get('/', (req, res) => {
    return res.status(200).json({ success: true, message: "Login successful", token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTcwMTY5NDgwNH0.3rjI4ZtFH1YBnsijH-P7pbDsnPIb2vck4_JPqY53Us4" });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is listening at http://0.0.0.0:${port}`);
});
