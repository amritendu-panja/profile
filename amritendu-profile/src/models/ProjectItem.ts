export default class ProjectItem {
    heading: string;
    subheading: string;
    image: string;
    technologies: string[];
    modules: Module[];
    constructor(heading: string, subheading: string, image: string, technologies: string[], modules: Module[]) {
        this.heading = heading;
        this.subheading = subheading;
        this.image = image;
        this.technologies = technologies;
        this.modules = modules;
    }
}

class Module {
    name: string;
    items: string[];
    constructor(name: string, items: string[]) {
        this.name = name;
        this.items = items;
    }
}