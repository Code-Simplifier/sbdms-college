import type { Department } from "$lib";

export async function load({ fetch }) {
	const response = await fetch("/api/departments");
	const departments: Department[] = await response.json();

	return { departments };
}
