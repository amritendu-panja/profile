import Badge from 'react-bootstrap/Badge';
import Skill from '../../models/Skill';
import { Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

export default function SkillItem(data: Skill) {
  return (
    <>
    <div className="d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">            
        <Row>
          <Col>
            { data.image_url ? <img src={data.image_url} className='skill-icon me-2' /> : null}
            <h5 className='d-inline-block'>{data.skill_name}</h5>
          </Col>
        </Row>
        <h6>{data.heading}</h6>
        <Row>
          <Col>
          {
            data.versions ? (data.versions.length > 0 ? <span className='me-1'>Versions:</span> : null) : null
          }              
          {
            data.versions.map((version: string) => (
              <Badge bg="success" pill className='me-1' key={uuidv4()}>{version}</Badge>
            ))
          }
          </Col>
        </Row>
      </div>      
      <Badge bg="primary" pill>
        {data.level}
      </Badge>
    </div>
    </>
  );
}