import express from "express";
import { createCategory, getCategories, getCategoryById } from "../application/categories.js";


const categoriesRouter=express.Router();

categoriesRouter.route("/").get(getCategories).post(createCategory)
categoriesRouter.route("/:id").get(getCategoryById)


export default categoriesRouter