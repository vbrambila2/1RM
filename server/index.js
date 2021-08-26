// const express = require("express");

// const PORT = process.env.PORT || 3001;

// const app = express();

// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

// // const path = require('path');

// // app.use(express.static(path.resolve(__dirname, './public')));

// app.get('/allow-cors', function(request, response) {
//     response.set('Access-Control-Allow-Origin', '*');
//     response.sendFile(__dirname + '/index.js');
//   });

// app.get("/", (req, res) => {
//     res.json({ message: "Main page here!" });
//   });

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// app.get("/movements", (req, res) => {
//     res.json({ message: "Bench" });
//   });
  
// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });