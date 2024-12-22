import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Skill from '../../models/Skill';

export default function SkillItem(data: Skill) {
  return (
    <ListGroup.Item        
          className="d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">            
            <div>
                { data.image_url ? <img src={data.image_url} className='skill-icon' /> : null}
                <h3 className='d-inline-block'>{data.skill_name}</h3>
            </div>
            <h4>{data.heading}</h4>
            {data.description}
          </div>
          <Badge bg="primary" pill>
            {data.level}
          </Badge>
    </ListGroup.Item>
  );
}