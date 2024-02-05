const express=require("express")
const userRoute=require("./user.route");
const tokenRouter =require("./token.route");


const router =express.Router();

router.use("/user",userRoute);
router.use("/token", tokenRouter);

module.exports=router;