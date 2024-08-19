import { error } from "@sveltejs/kit";

export async function load({ params }) {
	try {
		const page = await import(`../../../lib/content/pages/about-us/${params.slug}.md`);
		return {
			content: page.default,
			metadata: page.metadata,
			slug: params.slug
		};
	} catch (e) {
		throw error(404);
	}
}
