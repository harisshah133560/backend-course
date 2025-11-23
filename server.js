import express from "express";
import mongoose from "mongoose";
import UserCollection from "./models/UserCollection.js";

const app = express();
app.use(express.json());

const port = 3000;
const mongoURI = "mongodb://localhost:27017";
const db_name = "webclass";
mongoose
  .connect(`${mongoURI}/${db_name}`)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

  // Sample route to create a new user
  // get route to fetch all users
  app.get("/", async (req, res) => {
    try {
      const users = await UserCollection.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch users" });
    }
    });
    // post route to create a new user
    app.post("/users", async (req, res) => {
      try {
        const newUser = new UserCollection(req.body);   
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
      } catch (err) {
        res.status(500).json({ error: "Failed to create user" });
      }
    });
    // update route to update a user by id
    app.put("/:id", async (req, res) => {
      try {
        const updatedUser = await UserCollection.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedUser);
      } catch (err) {
        res.status(500).json({ error: "Failed to update user" });
      }
    });
    // delete route to delete a user by id
    app.delete("/:id", async (req, res) => {
      try {
        await UserCollection.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted successfully" });
      } catch (err) {
        res.status(500).json({ error: "Failed to delete user" });
      }
    });





app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
