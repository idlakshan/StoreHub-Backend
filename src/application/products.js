
import NotFoundError from "../domain/errors/not-found-error.js";
import ValidationError from "../domain/errors/validation-error.js";
import Product from "../infrastructure/schemas/Product.js";
import { productDto } from "./dto/product.js";

const _products = [
    {
        categoryId: "1",
        image: "/assets/products/airpods-max.png",
        id: "1",
        name: "AirPods Max",
        price: "549.00",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
        categoryId: "3",
        image: "/assets/products/echo-dot.png",
        id: "2",
        name: "Echo Dot",
        price: "99.00",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
        categoryId: "2",
        image: "/assets/products/pixel-buds.png",
        id: "3",
        name: "Galaxy Pixel Buds",
        price: "99.00",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
        categoryId: "1",
        image: "/assets/products/quietcomfort.png",
        id: "4",
        name: "Bose QuiteComfort",
        price: "249.00",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
        categoryId: "3",
        image: "/assets/products/soundlink.png",
        id: "5",
        name: "Bose SoundLink",
        price: "119.00",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
        categoryId: "5",
        image: "/assets/products/apple-watch.png",
        id: "6",
        name: "Apple Watch 9",
        price: "699.00",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
        categoryId: "4",
        image: "/assets/products/iphone-15.png",
        id: "7",
        name: "Apple Iphone 15",
        price: "1299.00",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
        categoryId: "4",
        image: "/assets/products/pixel-8.png",
        id: "8",
        name: "Galaxy Pixel 8",
        price: "549.00",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
];

const getProducts = async (req, res) => {
   

    if (req.query.categoryId) {
        const categoryId = req.query.categoryId;
        const filteredProducts = await Product.find({ categoryId: categoryId })
        return res.status(200).json(filteredProducts).send();
    }
    const products = await Product.find();
    return res.status(200).json({ message: "success", payload: products });
}


const getProductById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id).populate('categoryId')

        if (!product) {
            throw new NotFoundError("Product Not Found")
        }
        return res.status(200).json({ message: "success", payload: product }).send();
    } catch (error) {
           next(error)
    }
}


const createProduct = async (req, res, next) => {
    try {
        const product = productDto.safeParse(req.body);

        if (!product.success) {
            throw new ValidationError(product.error.message)
        }

        await Product.create({
            categoryId: product.data.categoryId,
            image: product.data.image,
            name: product.data.name,
            price: product.data.price,
            description: product.data.description,
        });

        return res.status(201).send();
    } catch (error) {
        next(error)

    }

}

export { getProducts, getProductById, createProduct }