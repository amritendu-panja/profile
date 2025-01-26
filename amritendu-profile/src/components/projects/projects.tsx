import { Accordion, Row, Col } from "react-bootstrap";
import projectJson from '../../assets/projects.json';
import ProjectItem from "../../models/ProjectItem";

export default function Projects() {
  const projectList : ProjectItem[] = projectJson;
  return (
    <div className="projects">
      <div className="projects-container">
        <div className="projects-content">
          <h1>Projects</h1>
          <p>
            I have worked on a wide range of projects, from small websites to large enterprise applications.
            Some of my notable projects include:
          </p>
          <Accordion defaultActiveKey="0">
            {
              projectList.map((project, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{project.heading}</Accordion.Header>
                  <Accordion.Body>
                    <p className="lead">{project.subheading}</p>
                    { project.image ? <Row><Col md="auto">Screen:</Col><Col md="auto"><img src={project.image} /></Col></Row> : null }                    
                    <ul>
                      <li>
                        Technologies:
                        <ul>
                          {
                            project.technologies.map((tech, index) => (
                              <li key={index}>{tech}</li>
                            ))
                          }
                        </ul>
                      </li>
                      <li>
                        Modules:
                        <ul>
                          {
                            project.modules.map((module, index) => (
                              <li key={index}>{module.name}
                                {module.items ? (
                                  <ul>
                                    {
                                      module.items.map((subModule, index) => (
                                        <li key={index}>{subModule}</li>
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
                    </Accordion.Body>
                  </Accordion.Item>
                  ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}