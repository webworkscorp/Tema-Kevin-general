export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  images: string[];
  benefits: string[];
  stockStatus: string;
  deliveryTime: string;
  description: string;
  howToUse: string;
  ingredients: string;
  features: string[];
  precautions: string;
}

export const MOCK_PRODUCT: Product = {
  id: "1",
  name: "Serum Facial Iluminador",
  category: "30ml | Cuidado de la Piel",
  price: 45.00,
  currency: "€",
  images: [
    "https://i.imgur.com/kOAoMCi.jpeg",
    "https://picsum.photos/seed/serum1/800/800",
    "https://picsum.photos/seed/serum2/800/800",
    "https://picsum.photos/seed/serum3/800/800",
    "https://picsum.photos/seed/serum4/800/800",
  ],
  benefits: [
    "Hidratación profunda por 24 horas",
    "Reduce visiblemente las líneas de expresión",
    "Fórmula no grasa de rápida absorción",
    "Apto para todo tipo de pieles"
  ],
  stockStatus: "En stock",
  deliveryTime: "Entrega en 2–3 días",
  description: "Nuestro Serum Facial Iluminador está formulado con una mezcla potente de Vitamina C y Ácido Hialurónico para revitalizar tu piel y devolverle su brillo natural.",
  howToUse: "Aplicar 2-3 gotas sobre el rostro limpio y seco por la mañana y por la noche. Masajear suavemente hasta su total absorción.",
  ingredients: "Aqua, Ascorbic Acid, Glycerin, Sodium Hyaluronate, Phenoxyethanol, Ethylhexylglycerin.",
  features: [
    "Vegano y Cruelty-free",
    "Sin parabenos ni sulfatos",
    "Envase reciclable",
    "Dermatológicamente testado"
  ],
  precautions: "Evitar el contacto directo con los ojos. En caso de irritación, suspender su uso y consultar con un médico. Mantener fuera del alcance de los niños."
};
