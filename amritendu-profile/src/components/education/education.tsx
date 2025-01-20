import eduJson from '../../assets/education.json';
import QualificationList from '../../models/QualificationList';
import { v4 as uuidv4 } from 'uuid';
import Card from 'react-bootstrap/Card';
import { Table } from 'react-bootstrap';
export default function Education() {
    const education_list : QualificationList[] = eduJson;
    
  return (
    <>
        {
            education_list.map((edu, index) => {
                let marginClass = "mb-3";
                if(index == education_list.length - 1){
                    marginClass = "";
                }
                return (
                    <Card className={marginClass} key={uuidv4()}>
                        <Card.Header>
                        <strong>{edu.category}</strong>
                        </Card.Header>
                        <Card.Body>
                            <Table striped bordered hover>
                                <thead>
                                    {
                                        edu.category_type == 1 ? 
                                            <tr>
                                                <th>Examination</th>
                                                <th>Year</th>
                                                <th>Board / University</th>
                                                <th>Marks</th>
                                                <th>Percentage</th>
                                            </tr> :
                                        edu.category_type == 2 ?
                                            <tr>
                                                <th>Certification</th>
                                                <th>Insitute</th>
                                            </tr> :
                                        null
                                    }
                                    
                                </thead>
                                <tbody>
                                {
                                    edu.items.map((item, j_index) => {
                                        return (
                                            edu.category_type == 1 ? 
                                                <tr key={j_index}>                                            
                                                    <td><strong>{item.name}</strong></td>
                                                    <td>{item.year}</td>
                                                    <td>{item.board}</td>
                                                    <td>{item.marks}</td>
                                                    <td>{item.percentage}</td>
                                                </tr> :
                                            edu.category_type == 2 ?
                                                <tr key={j_index}>                                            
                                                    <td><strong>{item.name}</strong></td>                                                    
                                                    <td>{item.board}</td>                                                    
                                                </tr>:
                                            null
                                        )
                                    })
                                }
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                )
            })
        }
    </>
    );
};
      