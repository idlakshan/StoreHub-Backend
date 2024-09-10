import { z } from "zod"

const categoryDto=z.object({
    name:z.string()
});

export default categoryDto