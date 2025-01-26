import { Card } from "react-bootstrap";

export default function ProjectItem(data: any) {
  return (
    <Card>
        <Card.Header><strong>{data.heading}</strong></Card.Header>
        <Card.Body>
            <Card.Title>{data.subheading}</Card.Title>
            <ul>
                <li>
                    Technologies:
                    <ul>
                        {
                            data.technologies.map((tech: any) => (
                                <li>{tech}</li>
                            ))
                        }
                    </ul>
                </li>
                <li>
                    Modules:
                    <ul>
                        {
                            data.modules.map((module: any) => (
                                <li>{module.description}
                                {module.subModules ? (
                                    <ul>
                                        {
                                            module.subModules.map((subModule: any) => (
                                                <li>{subModule.description}</li>
                                            ))
                                        }
                                    </ul>
                                ) : null}
                                </li>                                
                            ))
                        }
                    </ul>
                </li>
            </ul>
                        
        </Card.Body>
    </Card>    
  );
}