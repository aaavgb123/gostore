import { getTranslations } from "@/i18n/server";
import StoreConfig from "@/store.config";
import { Newsletter } from "@/ui/footer/newsletter.client";
import { YnsLink } from "@/ui/yns-link";
import type { SVGAttributes } from "react";

const sections = [
	{
		header: "Products",
		links: StoreConfig.categories.map(({ name, slug }) => ({
			label: name,
			href: `/category/${slug}`,
		})),
	},
	{
		header: "Support",
		links: [
			{ label: "Terms & Conditions", href: "/support/terms-and-conditions" },
			{ label: "Terms of Use", href: "/support/terms-of-use" },
			{ label: "Privacy Notice", href: "/support/privacy-notice" },
			{ label: "Cookie Policy", href: "/support/cookie-policy" },
		],
	},
	{
		header: "Help",
		links: [
			{ label: "FAQ", href: "/help/faq" },
			{ label: "Delivery Information", href: "/help/delivery-information" },
			{ label: "Returns Policy", href: "/help/returns-policy" },
			{ label: "Orders", href: "/help/orders" },
			{ label: "Submit a Fake", href: "/help/submit-a-fake" },
			{ label: "Sustainability", href: "/help/sustainability" },
			{ label: "About Us", href: "/help/about-us" },
		],
	},
];

export async function Footer() {
	const t = await getTranslations("Global.footer");

	return (
		<footer className="w-full bg-neutral-50 p-6 text-neutral-800 md:py-12">
			<div className="container flex max-w-7xl flex-row flex-wrap justify-center gap-16 text-sm sm:justify-between">
				<div className="">
					<div className="flex w-full max-w-sm flex-col gap-2">
						<h3 className="font-semibold">{t("newsletterTitle")}</h3>
						<Newsletter />
					</div>
				</div>

				<nav className="grid grid-cols-2 gap-16">
					{sections.map((section) => (
						<section key={section.header}>
							<h3 className="mb-2 font-semibold">{section.header}</h3>
							<ul role="list" className="grid gap-1">
								{section.links.map((link) => (
									<li key={link.label}>
										<YnsLink className="underline-offset-4 hover:underline" href={link.href}>
											{link.label}
										</YnsLink>
									</li>
								))}
							</ul>
						</section>
					))}
				</nav>
			</div>
			<div className="container mt-8 flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-neutral-500 md:flex-row">
				<div>
					<p>© 2025 Go Store</p>
					<p>Delightful commerce for everyone</p>
				</div>
			</div>
		</footer>
	);
}

