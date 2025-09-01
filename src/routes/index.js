import { Router } from "express";
import { ConsultarProductos } from "../public/services/conexion.js";

const router = Router();
router.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

router.get("/promociones", (req, res) => {
  res.render("promociones", { title: "Promociones" });
});
router.get("/catalogo", (req, res) => {
  res.render("catalogo", { title: "Catalogo" });
});

router.get("/api/get-productos", async (req, res) => {
    try{
        const productos = await ConsultarProductos();
        if (!productos || productos.length === 0) {
            console.log("Productos no encontrados");
            return res.status(404).json({ error: "Productos no encontrados" });
        }
        res.status(200).json(productos);
    } catch (error) {
        console.error("Error al obtener productos:", error);
        res.status(500).json({ error: "Error al obtener productos" });
    }
});

export default router;
