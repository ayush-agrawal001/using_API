import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const res_qou = await axios.get("https://hindi-quotes.vercel.app/random");
        const data = res_qou.data;
        res.render("index.ejs", {getexecuted : true, rquotes: data }); 
    } catch (error) {
        console.error("Failed to make request", error.message);
        res.render("index.ejs", { error: error.message }); 
    }
});

app.post('/', async (req,res) => {
    if(req.body.type !== undefined)
    {
        var type = req.body.type
    }else{
        var type = ""
    }
    // console.log(type)
    var numb_q = req.body.dropvalue
    // console.log(numb_q)

    try{
        var q_list = []; 
        for (let i = 0; i < numb_q; i++) {
            const res_sqou = await axios.get(`https://hindi-quotes.vercel.app/random/${type}`)
            var data = res_sqou.data
            // console.log(data)
            q_list.push(data)
        }
        // console.log(q_list)
        // console.log(data)
        res.render("index.ejs", {getexecuted : false, squotes : q_list})
    }catch(error){
        console.error("Failed to make the request", error.message);
        res.render("index.js", {error : error.message})
    }

})

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});
