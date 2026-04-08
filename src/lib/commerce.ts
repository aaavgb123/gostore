import * as Commerce from "commerce-kit";
import { ZodError } from "zod";

type ProductBrowseParams = Parameters<typeof Commerce.productBrowse>[0];
type StripeConnectionError = {
	type: "StripeConnectionError";
};

const isStripeConnectionError = (error: unknown): error is StripeConnectionError => {
	return (
		typeof error === "object" && error !== null && "type" in error && error.type === "StripeConnectionError"
	);
};

export const safeProductBrowse = async (params: ProductBrowseParams) => {
	try {
		return await Commerce.productBrowse(params);
	} catch (error) {
		if (error instanceof ZodError) {
			console.error("[safeProductBrowse] Invalid product metadata", {
				params,
				message: error.message,
				issues: error.issues,
			});
			return [];
		}
		if (isStripeConnectionError(error)) {
			console.error("[safeProductBrowse] Stripe connection error while browsing products", {
				params,
				error: {
					type: error.type,
					message: error instanceof Error ? error.message : undefined,
				},
			});
			return [];
		}
		throw error;
	}
};
