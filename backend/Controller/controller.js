import User from "../Config/mongooseSchema.js";

const getData = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true ,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const createData = async (req, res) => {
  const { name, password, email, mobile } = req.body;

  try {
    const create = await User.create({
      name,
      password,
      email,
      mobile
    });

    res.status(201).json({
      success: true,
      data: create,
      message: "Data create Successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const login = async (req , res ) => {
    const {email, password } =req.body
    try {
         const 
    } catch (error) {
        console.log( error.message);
        
    }
}

const getlogin  = async (req, res ) => {

    try {
        const data =await User.findOne({
            
        })
    } catch (error) {
        console.log(error.message);
        
    }

} 

export default { createData, getData};