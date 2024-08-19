export interface Page {
	title: string;
	slug: string;
	published: boolean;
}

export interface Department {
	title: string;
	slug: string;
	icon: string;
	thumbnail: string;
	courses: Course[];
	faculity: Faculity[];
}

export interface Course {
	title: string;
	duration: number;
}

export interface Faculity {
	name: string;
	designation: string;
	qualification: string;
	profile: string;
}
