import Skill from './Skill';
export default class SkillList {
    skill_type: string;
    skills: Skill[];
    constructor(skill_type: string, skills: Skill[]) {        
        this.skill_type = skill_type;
        this.skills = skills;
    }
}