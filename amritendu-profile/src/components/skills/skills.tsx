import SkillItem from '../skill-item/skill-item';
import Card from 'react-bootstrap/Card';
import skillJson from '../../assets/skills.json';
import SkillList from '../../models/SkillList';
import { v4 as uuidv4 } from 'uuid';

export default function Skills() {  
  const skill_list: SkillList[] = skillJson;

  return (
    <>
      <p>
        I have experience in a wide range of technologies, including:
      </p>
      {
        skill_list.map((skill_list_item, index) => {
          let marginClass = "mb-3";
          if(index == skill_list.length - 1){
            marginClass = "";
          }
          return (
            <Card className={marginClass} key={uuidv4()}>
              <Card.Header>
                <h3>{skill_list_item.skill_type}</h3>
              </Card.Header>
              <Card.Body>                
                  {
                    skill_list_item.skills.map((skill, j_index) => {
                      let need_hr = true;
                      if(j_index == skill_list_item.skills.length - 1){
                        need_hr = false;
                      }
                      return (
                        <div key={uuidv4()}>
                          <SkillItem {...skill} />
                          {
                            need_hr ? <hr /> : null
                          }
                        </div>
                      )
                    })
                  }                
              </Card.Body>
            </Card>
          )
        })
      }      
    </>
  );
}