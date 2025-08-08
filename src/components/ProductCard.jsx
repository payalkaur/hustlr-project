import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const ProductCard = ({ product, addProduct }) => {
	const sampleVariants = product.variants || ["S", "M", "L", "XL"];
	const isInStock = product.isInStock ?? Math.random() > 0.3;
	const [selectedVariant, setSelectedVariant] = useState(sampleVariants[0]);

	//   const product = {
	//   id: 1,
	//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
	//   price: 109.95,
	//   description:
	//     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
	//   category: "men's clothing",
	//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
	//   rating: {
	//     rate: 3.9,
	//     count: 120
	//   },
	//   variants: ["S", "M", "L", "XL"],
	//   stock: true
	// };

	const handleAddToCart = () => {
		addProduct(product);
		toast.success("Added to cart");
	};

	return (
		<div
			className="card h-100 border-0 rounded-3 overflow-hidden"
			style={{
				transition: "box-shadow 0.3s ease",
			}}
			onMouseEnter={(e) =>
				(e.currentTarget.style.boxShadow =
					"0 0.5rem 1rem rgba(0,0,0,0.15)")
			}
			onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
		>
			{/* Product Image */}
			<Link to={`/product/${product.id}`}>
				<div
					className="bg-light d-flex align-items-center justify-content-center"
					style={{ height: "250px" }}
				>
					<img
						src={product.image}
						alt={product.title}
						style={{
							maxHeight: "80%",
							maxWidth: "80%",
							objectFit: "contain",
						}}
					/>
				</div>
			</Link>

			{/* Product Info */}
			<div className="card-body d-flex flex-column p-3">
				<h6 className="card-title fw-semibold" title={product.title}>
					{product.title}
				</h6>

				<p className="fw-bold fs-5 mb-3">${product.price}</p>

				{/* Variant Selector */}
				<select
					className="form-select form-select-sm mb-3"
					value={selectedVariant}
					onChange={(e) => setSelectedVariant(e.target.value)}
				>
					{sampleVariants.map((variant, index) => (
						<option key={index} value={variant}>
							{variant}
						</option>
					))}
				</select>

				{/* Action Buttons */}
				<div className="mt-auto">
					{isInStock ? (
						<button
							className="btn btn-dark w-100"
							onClick={handleAddToCart}
						>
							Add to Cart
						</button>
					) : (
						<button className="btn btn-secondary w-100" disabled>
							Out of Stock
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
