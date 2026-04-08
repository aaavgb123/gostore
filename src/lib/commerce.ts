import * as Commerce from "commerce-kit";
import { ZodError } from "zod";

type ProductBrowseParams = Parameters<typeof Commerce.productBrowse>[0];

export const safeProductBrowse = async (params: ProductBrowseParams) => {
	try {
		return await Commerce.productBrowse(params);
	} catch (error) {
		if (error instanceof ZodError) {
			console.warn("[safeProductBrowse] Skipping invalid product metadata from provider", error.issues);
			return [];
		}
		throw error;
	}
};
