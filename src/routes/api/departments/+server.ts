import type { Department } from "$lib";
import { json } from "@sveltejs/kit";

async function getDepartments() {
	let departments: Department[] = [];

	const paths = import.meta.glob("/src/lib/content/pages/departments/*.md", { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split("/").at(-1)?.replace(".md", "");

		if (file && typeof file === "object" && "metadata" in file && slug) {
			const metadata = file.metadata as Omit<Department, "slug">;
			const department = { ...metadata, slug } satisfies Department;

			departments.push(department);
		}
	}

    return departments;
}

export async function GET() {
	const departments = await getDepartments();
	return json(departments);
}

