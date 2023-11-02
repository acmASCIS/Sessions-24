import express from "express"
import Router from "./routes/productRoutes";

const app = express();
app.use(express.json())
app.use("/products",Router)
app.use("/products", Router)

app.listen(3000, function(){

    console.log("listening on port 3000");
    
})