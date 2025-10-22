/* eslint-disable @next/next/no-img-element */
import { IProducts } from "@/types/productTypes/productsTypes";
import React from "react";
import GridAddToCartBtn from "../buttons/GridAddToCardBtn";
import Link from "next/link";
import { Tooltip } from "@mui/material";
import GridAddToWishlistBtn from "../buttons/GridAddToWishlistBtn";
import Image from "next/image";
import errorImage from "@/assets/image-placeholder.jpg";
import ListCardAddBtn from "../buttons/ListCardAddBtn";
import { useRouter } from "next/router";

const ListProductCard = ({ product }: { product: IProducts }) => {
  const router = useRouter();
  const { category } = router.query;

  const { features } = product;
  const productFeatures = [features.f2, features.f3, features.f4, features.f5];
  const discountPercentage = Math.round(((Number(product.price) - product.discountedPrice) / Number(product.price)) * 100);
  
  return (
    <div className="relative w-full bg-white border border-input hover:border-primary/30 transition-all duration-200 mb-4 group">
      <div className="flex flex-col sm:flex-row">
        {/* Product Image */}
        <div className={`relative w-full sm:w-48 flex-shrink-0 ${!product.status ? 'opacity-60' : ''}`}>
          {/* Status Badges */}
          <div className="absolute top-2 right-2 z-10 flex gap-1">
            {discountPercentage > 0 && (
              <span className="bg-red text-white text-xs font-bold px-2 py-1 rounded">
                -{discountPercentage}%
              </span>
            )}
            {!product.status && (
              <span className="bg-gray text-white text-xs font-bold px-2 py-1 rounded">
                OUT
              </span>
            )}
          </div>
          
          <div className="aspect-square sm:aspect-auto sm:h-48 bg-gray-50 p-4">
            <Image
              width={400}
              height={400}
              src={product.images.i1}
              alt="Product Image"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              priority
              onError={(e: any) => {
                e.target.src = errorImage.src;
              }}
            />
          </div>
        </div>

        {/* Product Content */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            {/* Product Name */}
            <Tooltip title="View Details">
              <Link href={`/products/${product._id}`}>
                <h3 className="text-base font-medium text-black hover:text-primary transition-colors duration-200 mb-3 line-clamp-2">
                  {product.name}
                </h3>
              </Link>
            </Tooltip>

            {/* Features */}
            <div className="space-y-1 mb-4">
              {productFeatures.slice(0, 4).map((feature, index) => (
                <p key={index} className="text-sm text-gray line-clamp-1">
                  • {feature}
                </p>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex items-center justify-between pt-3 border-t border-input">
            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-primary">
                ${Math.floor(product.discountedPrice)}
              </span>
              {Number(product.price) !== product.discountedPrice && (
                <span className="text-sm text-gray line-through">
                  ${product.price}
                </span>
              )}
            </div>

            {/* Action Button */}
            <ListCardAddBtn param={category as string} product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProductCard;
