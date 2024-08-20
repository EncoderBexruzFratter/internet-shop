import { ProducType } from '@/interface';
import { FC } from 'react';
import Link from 'next/link';
import CustomImage from './Image';

const Product: FC<{ product: ProducType }> = ({ product }) => {
    console.log(product);
    return (
        <Link href={`/product/${product.id}`} className="h-96 p-4 w-full flex flex-col group border bg-white rounded-lg hover:scale-105 transition-transform ease-out duration-200">
            <div className="relative flex-1 max-h-80">
                <CustomImage product={product} fill />
            </div>
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 mt-5">{product.category}</h2>
            <div className="flex items-center justify-between w-full">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3 line-clamp-1">{product.title}</h1>
                <h2 className="title-font text-lg font-medium text-gray-900 mb-3">{product.price}</h2>
            </div>
            <p className="leading-relaxed mb-3 line-clamp-2">{product.description}</p>
        </Link>
    );
};

export default Product;
