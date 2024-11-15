import User from "../models/User.js"
 export const createAdmin=async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const user = new User({
        name,
        email,
        password,
        role: "Admin",
      });
  
      const savedUser = await user.save();
  
      res.json({
        savedUser,
        message: "User created successfully"
      });
  
    } catch (error) {
      res.json({
        error: " error occured",
      })
  
      console.log(error)
    }
  };

  //task1
  export const createAlumni=async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const user = new userModel({
        name,
        email,
        password,
        role: "Alumni",
      });
  
      const savedUser = await user.save();
  
      res.json({
        savedUser,
        message: "User created successfully"
      });
  
    } catch (error) {
      res.json({
        error: "server error",
      })
  
      console.log(error)
    }
  };
  //stu
  export const createStudent=async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const user = new userModel({
        name,
        email,
        password,
        role: "Student",
      });
  
      const savedUser = await user.save();
  
      res.json({
        savedUser,
        message: "User created successfully"
      });
  
    } catch (error) {
      res.json({
        error: "server error",
      })
  
      console.log(error)
    }
  };
  
  export const getAllUsers=async(req,res)=>{
    try {
    const getusers= await User.find()
    res.json({getusers})
    console.log(error)
    } catch (error) {
      error:"cannot fetch data"
    }
  }