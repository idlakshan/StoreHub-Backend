import Category from "../infrastructure/schemas/Category.js";
import categoryDto from "./dto/category.js";


const getCategories=async(req,res)=>{
    const categories=await Category.find();
    return res.status(200).json(categories)
}

const createCategory=async (req,res)=>{
    const category=categoryDto.safeParse(req.body);
    if(!category.success){
        return res.status(400).json({ message: "Invalid data" }).send();
    }

    await Category.create({
        name:category.data.name,
    })

   return res.status(201).send()
}

const getCategoryById=async(req,res)=>{
    const id=req.params.id;
    const category=await Category.findById(id);

    if(!category){
      return  res.status(404).json({message:"Category not found"}).send();
    }

    return res.status(200).json(category).send()


}

export {getCategories,createCategory,getCategoryById}