const express = require("express")
const {Web3} = require("web3")
const app = express()
const PORT = 4000
const ABI = require("./ABI.json")
const CONTRACT_ADDRESS = "0xA4924001Dde359Dc5aaF896b236aAE5b18d5E8C0"
const Node_Provider = "https://blissful-long-mound.ethereum-sepolia.discover.quiknode.pro/2732edfbb85d97a8994f200a578509386646ce48/"
const cors = require("cors")
const socketIo = require("socket.io")

const web3 = new Web3(Node_Provider)
const contract = new web3.eth.Contract(ABI,CONTRACT_ADDRESS)

const fetchNft = async(account)=>{
    try{
        const nftBalance = await contract.methods.balanceOf(account).call()
        return {userNFTs : Number(nftBalance)}
        
    }catch(err){
        console.error(err)
    }
}

app.use(express.json())
app.use(cors())
app.post("/members",async(req,res)=>{
    try{

        const account = req.body.from
        const numNFTs = await fetchNft(account)
        console.log(numNFTs)
        if(numNFTs.userNFTs > 0){
            res.status(200).json({status:200,numNFTs})
        }else{
            res.status(400).json({status:400,message:"You Don't Have NFT"})
        }

    }catch(err){
        res.status(500).json({error: "Internal Error"})
    }
})

app.post("/webhook",async(req,res)=>{
    try{
        const account = req.body[0].from;
        const numNFTs = await fetchNft(account)
        io.emit("nftsUpdated",{userNFTs:numNFTs.userNFTs})
        res.status(200).json({status:200,message:"Webhook Triggered"})
        console.log(account)

    }catch(error){
        console.log(error)
    }
   
})

app.get("/",(req,res)=>{
    res.send("Hey Ngrok...")
})

const server = app.listen(PORT,()=>{
    console.log("Server Listening At",PORT)
})
const io = socketIo(server)
io.on("connection",()=>{
    console.log("connected")
})
// "0xBDAfD00e31218D5A0D7173Ba8B850D570fe923BC"
