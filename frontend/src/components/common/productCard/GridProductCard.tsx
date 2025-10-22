/* eslint-disable @next/next/no-img-element */
import { IProducts } from "@/types/productTypes/productsTypes";
import React from "react";
import GridAddToCartBtn from "../buttons/GridAddToCardBtn";
import Link from "next/link";
import { Tooltip } from "@mui/material";
import GridAddToWishlistBtn from "../buttons/GridAddToWishlistBtn";
import Image from "next/image";
import errorImage from "@/assets/image-placeholder.jpg";

const GridProductCard = ({ product }: { product: IProducts }) => {
  const { features } = product;
  const productFeatures = [features.f2, features.f3, features.f4, features.f5];
  const discountPercentage = Math.round(((Number(product.price) - product.discountedPrice) / Number(product.price)) * 100);
  
  return (
    <div className="relative w-full bg-white shadow border-input hover:border-primary/30 transition-all duration-200 group overflow-hidden">
      {/* Discount Ribbon */}
      {discountPercentage > 0 && (
        <div className="absolute top-2 -right-8 z-20 bg-gradient-to-r from-red to-pink text-white text-xs font-bold px-8 py-1 rotate-45 shadow-md">
          -{discountPercentage}%
        </div>
      )}

      {/* Status Indicators */}
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-between p-3">
        <div className="flex gap-2">
          <GridAddToWishlistBtn
            status={product.status}
            productID={product._id}
          />
        </div>
        <div className="flex gap-2">
          {!product.status && (
            <span className="bg-gray text-white text-xs font-bold px-2 py-1 rounded-full">
              OUT
            </span>
          )}
        </div>
      </div>

      {/* Product Image */}
      <div className={`relative overflow-hidden ${!product.status ? 'opacity-60' : ''}`}>
        <div className="aspect-square bg-gray-50 p-4">
          <Image
            width={400}
            height={400}
            src={product.images.i1}
            alt="Product Image"
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={(e: any) => {
              e.target.src = errorImage.src;
            }}
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Tooltip title="View Details">
          <Link href={`/products/${product._id}`}>
            <h3 className="text-sm font-medium text-black hover:text-primary transition-colors duration-200 mb-3 line-clamp-2 min-h-[40px]">
              {product.name}
            </h3>
          </Link>
        </Tooltip>

        {/* Key Features */}
        <div className="space-y-1 mb-4">
          {productFeatures.slice(0, 2).map((feature, index) => (
            <p key={index} className="text-xs text-gray line-clamp-1">
              • {feature.length > 30 ? feature.slice(0, 30) + "..." : feature}
            </p>
          ))}
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          {/* Price */}
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary">
              ${Math.floor(product.discountedPrice)}
            </span>
            {Number(product.price) !== product.discountedPrice && (
              <span className="text-sm text-gray line-through">
                ${product.price}
              </span>
            )}
          </div>

          {/* Action Button */}
          <GridAddToCartBtn
            status={product.status}
            product={{
              product: {
                _id: product._id,
                name: product.name,
                status: product.status,
                images: {
                  i1: product.images.i1,
                },
                discountedPrice: product.discountedPrice,
              },
              quantity: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GridProductCard;
