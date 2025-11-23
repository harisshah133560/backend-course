import  mongoose  from "mongoose";
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true }
);
const UserCollection = mongoose.model("User", UserSchema);
export default UserCollection;
    // // update route to update a user by id
    // app.put("/:id", async (req, res) => {
    //   try {
    //     const updatedUser = await UserCollection.findByIdAndUpdate(
    //         req.params.id,
    //         req.body,
    //         { new: true }
    //     );
    //     res.json(updatedUser);
    //   } catch (err) {
    //     res.status(500).json({ error: "Failed to update user" });
    //   }
    // });
    // // delete route to delete a user by id
    // app.delete("/:id", async (req, res) => {
    //   try {
    //     await UserCollection.findByIdAndDelete(req.params.id);
    //     res.json({ message: "User deleted successfully" });
    //   } catch (err) {
    //     res.status(500).json({ error: "Failed to delete user" });
    //   }
    // });
