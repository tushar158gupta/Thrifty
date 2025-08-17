// src/app/products/[id]/page.tsx

import React from "react";

// ✅ Correct way to type params in Next.js App Router
export default async function ProductPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { color?: string; size?: string };
}) {
  // Example fetching product details with ID
  const productId = params.id;
  const color = searchParams?.color;
  const size = searchParams?.size;

  // Mock product fetching (replace with your API call)
  const product = {
    id: productId,
    name: "Sample Product",
    description: "This is a sample product description.",
    price: "$49.99",
    color: color ?? "Default",
    size: size ?? "M",
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="mt-2 text-gray-700">{product.description}</p>
      <p className="mt-2 text-lg font-semibold">{product.price}</p>

      <div className="mt-4">
        <p>
          <span className="font-medium">Color:</span> {product.color}
        </p>
        <p>
          <span className="font-medium">Size:</span> {product.size}
        </p>
      </div>
    </div>
  );
}
