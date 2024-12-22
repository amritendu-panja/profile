import ListGroup from 'react-bootstrap/ListGroup';
import SkillItem from '../skill-item/skill-item';
import Skill from '../../models/Skill';
import netcore_logo from '/netcore.png'

export default function Skills() {
  const skill_items = [];
  const netcore_skill_item: Skill = new Skill(".Net Core", "Total Experience: 10 years", 7.5, "I have been working with .Net Core since its inception. I have worked on a wide range of projects using .Net Core. I have worked on both web, desktop applications, windows services, console applications, batch jobs etc.", netcore_logo);

  skill_items.push(netcore_skill_item);

  return (
    <>
      <p>
        I have experience in a wide range of technologies, including:
      </p>
      <ListGroup>
        {
          skill_items.map((skill_item) => {
            return <SkillItem {...skill_item} />
          })
        }
      </ListGroup>
    </>
  );
}