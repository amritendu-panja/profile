export default class Skill {
    skill_name: string;
    heading: string;
    description: string;
    level: number;
    image_url: string;
    constructor(skill_name: string, heading: string, level: number, description: string = "", image_url: string = "") {
        this.skill_name = skill_name;
        this.heading = heading;
        this.description = description;
        this.level = level;
        this.image_url = image_url;
    }
}