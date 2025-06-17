import { getLocale } from "@/i18n/server";
import { formatMoney } from "@/lib/utils";
import { JsonLd, mappedProductsToJsonLd } from "@/ui/json-ld";
import { YnsLink } from "@/ui/yns-link";
import type * as Commerce from "commerce-kit";
import Image from "next/image";
import "@/lib/types";

export const ProductList = async ({ products }: { products: Commerce.MappedProduct[] }) => {
	const locale = await getLocale();

	console.log('所有商品slug:', products.map(p => p.metadata.slug));

	// 通过在 hiddenSlugs 数组中添加需要隐藏的商品 slug，可以实现前端隐藏指定商品。
	const hiddenSlugs = ['goshequ', 'hahha', '哈哈哈'];
	const visibleProducts = products.filter(
		(product) => !hiddenSlugs.includes(product.metadata.slug)
	);

	// Remove debug logging
	console.log('完整商品对象:', visibleProducts[0]);

	return (
		<>
			<ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{visibleProducts.map((product, idx) => {
					console.log('商品元数据:', product.metadata);
					return (
						<li key={product.id} className="group">
							<YnsLink href={`/product/${product.metadata.slug}`}>
								<article className="overflow-hidden bg-white">
									{product.images[0] && (
										<div className="rounded-lg aspect-square w-full overflow-hidden bg-neutral-100">
											<Image
												className="group-hover:rotate hover-perspective w-full bg-neutral-100 object-cover object-center transition-opacity group-hover:opacity-75"
												src={product.images[0]}
												width={768}
												height={768}
												loading={idx < 3 ? "eager" : "lazy"}
												priority={idx < 3}
												sizes="(max-width: 1024x) 100vw, (max-width: 1280px) 50vw, 700px"
												alt=""
											/>
										</div>
									)}
									<div className="p-2">
										<h2 className="text-xl font-medium text-neutral-700">{product.name}</h2>
										<footer className="text-base font-normal text-neutral-900">
											{product.default_price.unit_amount && (
												<p>
													{formatMoney({
														amount: product.default_price.unit_amount,
														currency: product.default_price.currency,
														locale,
													})}
												</p>
											)}
										</footer>
									</div>
								</article>
							</YnsLink>
						</li>
					);
				})}
			</ul>
			<JsonLd jsonLd={mappedProductsToJsonLd(products)} />
		</>
	);
};

export interface ProductMetadata {
	slug: string;
	stock: number;
	// ... 其它字段
	hidden?: string;
}

declare module "commerce-kit" {
	interface ProductMetadata {
		hidden?: string;
	}
}
