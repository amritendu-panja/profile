import expJson from '../../assets/experience.json';
import WorkExperience from '../../models/work_experience';
import { v4 as uuidv4 } from 'uuid';
import Card from 'react-bootstrap/Card';
export default function Experience() {
    const experience_list : WorkExperience[] = expJson;
    
  return (
    <>
        {
            experience_list.map((exp, index) => {
                let marginClass = "mb-3";
                if(index == experience_list.length - 1){
                    marginClass = "";
                }
                return (
                    <Card className={marginClass} key={uuidv4()}>
                        <Card.Header>
                        <strong>{exp.company}</strong>
                        </Card.Header>
                        <Card.Body>
                            <h5>{exp.position}</h5>
                            {
                                exp.current ? <p>Currently working from {exp.start_date}</p> : <p>{exp.start_date} - {exp.end_date}</p>
                            }
                            <strong>Responsibilities:</strong>
                            <ul>
                                {
                                    exp.responsibilities.map((responsibility, j_index) => {
                                        return (
                                            <li key={j_index}>{responsibility}</li>
                                        )
                                    })
                                }
                            </ul>
                        </Card.Body>
                    </Card>
                )
            })
        }
    </>
    );
};
      