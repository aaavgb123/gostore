import "@/app/globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartModalProvider } from "@/context/cart-modal";
import { CommerceGPT } from "@/ui/commerce-gpt";
import { Footer } from "@/ui/footer/footer";
import { JsonLd, accountToWebsiteJsonLd } from "@/ui/json-ld";
import { Nav } from "@/ui/nav/nav";
import * as Commerce from "commerce-kit";
import { connection } from "next/server";
import { Suspense } from "react";
import { CartModalPage } from "./cart/cart-modal";

export default async function StoreLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	await connection();
	const accountResult = await Commerce.accountGet().catch(() => null);
	const logoLink =
		accountResult?.logo?.links?.data.find((link) => !link.expired) ||
		(accountResult?.logo?.id ? await Commerce.fileGet(accountResult.logo.id) : null);

	return (
		<>
			<Suspense fallback={null}>
				<CommerceGPT />
			</Suspense>
			<Suspense fallback={null}>
				<CartModalProvider>
					<Nav />
					<TooltipProvider>
						<main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-6 pt-2 sm:px-6 lg:px-8">
							{children}
							<CartModalPage />
						</main>
						<Footer />
					</TooltipProvider>
				</CartModalProvider>
			</Suspense>
			<JsonLd
				jsonLd={accountToWebsiteJsonLd({
					account: accountResult?.account,
					logoUrl: logoLink?.url,
				})}
			/>
		</>
	);
}
