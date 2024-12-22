import { Card, Col, ListGroup, Row } from "react-bootstrap";
import profileImage from '/Photo.jpg';

export default function Home() {
  return (
    <>
        <Row>
            <Col md="auto">
                <img src={profileImage} alt="Profile" className="rounded h-100 border" />
            </Col>            
            <Col>
                <Card className="w-100">
                    <Card.Header>Key Informations</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={3}>Profile</Col>
                            <Col md={1}>:</Col>
                            <Col md="auto"><strong>FullStack Developer</strong></Col>
                        </Row>
                        <Row>
                            <Col md={3}>Experience</Col>
                            <Col md={1}>:</Col>
                            <Col md="auto"><strong>12+ years</strong></Col>
                        </Row>
                        <Row>
                            <Col md={3}>Location</Col>
                            <Col md={1}>:</Col>
                            <Col md="auto"><strong>Kolkata, India</strong></Col>
                        </Row>
                        <Row>
                            <Col md={3}>Platforms</Col>
                            <Col md={1}>:</Col>
                            <Col md="auto"><strong>Web, Desktop</strong></Col>
                        </Row>
                        <Row>
                            <Col md={3}>Languages</Col>
                            <Col md={1}>:</Col>
                            <Col md="auto"><strong>C#, JavaScript, Typescript, Python, SQL</strong></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>        
        <div className="mt-3">
            <p>
                Hi there! I'm Amritendu Panja, a software developer with a passion for building innovative and scalable solutions. With expertise in various programming languages, frameworks, and technologies, I excel in crafting high-quality web applications and services.
                I have worked on a wide range of projects, from small websites to large enterprise applications. I am passionate about learning new technologies and building innovative solutions.
                I can quickly learn and master new technology, and am equally successful in both team and self-directed settings, and proficient in a range of computer systems, languages, tools and testing methodologies. 
            </p>
            <div>
                <p>Throughout my career, I've had the privilege of working with:</p>
                <ListGroup>
                    <ListGroup.Item><strong>C# and Python</strong> - powerful programming languages that never fail to impress.</ListGroup.Item>
                    <ListGroup.Item><strong>HTML, CSS, and JavaScript</strong> - the foundation of modern web development.</ListGroup.Item>
                    <ListGroup.Item><strong>.NET Framework and .NET Core</strong> - allowing me to develop robust desktop and web applications.</ListGroup.Item>
                    <ListGroup.Item><strong>ASP.NET MVC, ASP.NET Web API, and ASP.NET Core</strong> - enabling me to create dynamic and responsive web applications.</ListGroup.Item>
                    <ListGroup.Item><strong>Angular with TypeScript</strong> - which enables me to craft visually stunning and interactive user experiences.</ListGroup.Item>
                    <ListGroup.Item><strong>Microsoft SQL Server</strong> - a reliable and powerful database management system that I use to store and manage data efficiently.</ListGroup.Item>
                    <ListGroup.Item><strong>Git</strong> - a powerful tool for managing code and collaborating with others.</ListGroup.Item>
                    <ListGroup.Item><strong>Azure DevOps</strong> - a powerful tool for managing the entire software development lifecycle.</ListGroup.Item>
                </ListGroup>
            </div>
            <p className="mt-2">My database expertise lies in <strong>Microsoft SQL Server</strong>, where I've honed my skills in designing, developing, and optimizing databases for optimal performance. 
                I have worked with <strong>PostgreSQL</strong> also, but in a smaller scale. Currently I am learning <strong>MongoDB</strong> as a <strong>NoSQL</strong> database.</p>
            
            <p>To manage my projects and collaborate with teams, I use version control systems like <strong>Git</strong> and <strong>Azure Team Foundation Server(TFS)</strong>.</p>
        </div>
    </>
  );
}