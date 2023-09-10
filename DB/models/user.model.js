// import { hashSync } from "bcryptjs";
import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new Schema(
  {
    firstName: {
    type:String,
    require:true
    },
    lastName: {
      type:String,
      require:true
    },
    email: {
      type: String,
      // unique: true,
    },
    password: {
      type:String,
      require:true
    },
    role: {
      type: String,
      default: 'Admin',
      enum: ['User', 'Admin','Researcher']
  },
 
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
  
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next, doc) {
  this.password = bcrypt.hashSync(this.password, +process.env.SALT_ROUNDS);
  next();
});


const userModel = model("User", userSchema);

export default userModel;
