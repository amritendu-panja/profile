export default class Skill {    
    skill_name: string;
    heading: string;
    level: number;
    image_url: string;
    versions: string[];
    bullets: string[];
    constructor(skill_name: string, heading: string, level: number, image_url: string = "", versions: string[] = [], bullets: string[]=[]) {        
        this.skill_name = skill_name;
        this.heading = heading;        
        this.level = level;
        this.image_url = image_url;
        this.versions = versions;
        this.bullets = bullets;
    }
}