import { Accordion } from "react-bootstrap";

export default function Projects() {
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
            <Accordion.Item eventKey="0">
              <Accordion.Header>Amount.com</Accordion.Header>
              <Accordion.Body>
                <p className="lead">Worked on multiple projects namely Fusion, GroundWork, Operations Portal, GoldFinch, Fundation Application (Small and Medium Business Loan application portal) for Linear Financial Technologies Ltd (currently merged with Amount.com), USA</p>
                <ul>
                  <li>
                    Technologies:
                    <ul>
                      <li>Angular 11</li>
                      <li>Web API</li>
                      <li>.net core 5</li>
                      <li>Entity Framework</li>
                      <li>SQL Server</li>
                    </ul>
                  </li>
                  <li>
                    Modules:
                    <ul>
                      <li>Loan Application generation</li>
                      <li>Creating Web APIs for accessing different information of the applications</li>
                      <li>Fixing bugs, creating new features, maintain logs</li>
                      <li>Unit testing, code coverage, maintaining code quality</li>
                    </ul>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Claims Manager Application</Accordion.Header>
              <Accordion.Body>
                <p className="lead">Worked on Claims Manager Application for United Fire Group (UFG) Insurance Company, USA on behalf of Localligence Inc. USA</p>
                <ul>
                  <li>
                    Technologies:
                    <ul>
                      <li>Angular 8</li>
                      <li>Leaflet map, Leaflet Draw</li>
                      <li>Web API Service</li>
                      <li>SQL Server</li>
                      </ul>
                  </li>
                  <li>
                    Modules:
                    <ul>
                      <li>Login Module</li>
                        <ul><li>Identity server integration with code flow</li></ul>
                      <li>Map display Module</li>
                        <ul>
                          <li>Show USA zip polygons on the map</li>
                          <li>Visualizing regions / territories defined by UFG</li>
                          <li>Show claim records on the map</li>
                          <li>Show details of records on claim records</li>
                        </ul>
                      <li>Summary Module</li>
                        <ul>
                          <li>Show summary as per map state</li>
                          <li>Show claim selections and assignment operations</li>
                        </ul>
                      <li>Drawing Module</li>
                        <ul><li>Enable supervisor users to draw and edit geometry shapes on map and do selections based on these shapes</li></ul>
                    </ul>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Claims Adjuster Application</Accordion.Header>
              <Accordion.Body>
                <p className="lead">Worked on Claims Adjuster Application for United Fire Group (UFG) Insurance Company, USA on behalf of Localligence Inc. USA</p>
                <ul>
                  <li>
                    Technologies:
                    <ul>
                      <li>Angular 6</li>
                      <li>Leaflet map, Leaflet Draw</li>
                      <li>Web API Service</li>
                      <li>SQL Server</li>
                      </ul>
                  </li>
                  <li>
                    Modules:
                    <ul>
                      <li>Login Module</li>
                        <ul>
                          <li>Identity server integration with code flow</li>
                        </ul>
                      <li>Map display Module</li>
                        <ul>
                          <li>Show USA state and zip polygons on the map</li>
                          <li>Visualizing regions / territories defined by UFG</li>                          
                        </ul>
                        <li>Supervisor Module</li>
                          <ul>
                            <li>Enable supervisors to define regions / territories</li>
                            <li>Add states or zips to regions / territories</li>
                          </ul>
                      <li>Summary Module</li>
                        <ul>
                          <li>Show summary as per map state</li>
                        </ul>
                      <li>Drawing Module</li>
                        <ul><li>Enable supervisor users to draw and edit geometry shapes on map and do selections based on these shapes</li></ul>
                    </ul>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>CATography Suite Admin Console (HTML5 version)</Accordion.Header>
              <Accordion.Body>
                <p className="lead">Worked on CATography Suite Admin Console (HTML5 version) for Jardine Lloyd Thompson Re-Insurance (JLT Re), USA on behalf of Localligence Inc. USA</p>
                <ul>
                  <li>
                    Technologies:
                    <ul>
                      <li>ASP.net MVC, jQuery, HTML, CSS, Bootstrap</li>
                      <li>Web API service hosted on Windows Service framework (Owin self-hosting)</li>
                      <li>SQL Server</li>
                      </ul>
                  </li>
                  <li>
                    Modules:
                    <ul>
                      <li>User management</li>
                      <li>Client Database management</li>
                      <li>Client portfolio management</li>
                      <li>Client portfolio heatmap generation</li>
                      <li>Client portfolio density map generation</li>
                      <li>Client specific services management</li>
                      <li>Client application access, service access, notification access management</li>
                      <li>Global map layers creation, update, access management
                        <ul>
                          <li>Map layers include different types of files including xls, xlsx, mdb, accdb, json, geojson, csv, kml, kmz, shp and also WMS layers</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Video Management System (OnSSI)</Accordion.Header>
              <Accordion.Body>
                <p className="lead">Worked on Video Management System (VMS) plugin application for accessing services and video streams of On-Net Surveillance Systems, Inc. (OnSSI), USA for Galaxy Control Systems (GalaxySys), USA</p>
                <ul>
                  <li>
                    Technologies:
                    <ul>
                      <li>Windows Presentation Framework (WPF)</li>
                      <li>AxAuga media control (proprietary application of OnSSI)</li>
                      <li>OnSSI Ocularis SDK</li>
                      <li>Windows Sockets, Windows Service</li>
                    </ul>
                  </li>
                  <li>
                    Modules:
                    <ul>
                      <li>Retrieving DVR related information from the OnSSI servers</li>
                      <li>Retrieving available cameras and their PTZ (Pan-Tilt-Zoom) capabilities</li>
                      <li>Save the above information via Galaxy System Software developed by GalaxySys</li>
                      <li>Show Live and recorded streams on AxAuga media controls</li>
                      <li>Executing PTZ commands - direct and preset</li>
                    </ul>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>CATography Risk Manager Application (HTML5 version)</Accordion.Header>
              <Accordion.Body>
                <p className="lead">Worked on CATography Risk Manager Application (HTML5 version) for Jardine Lloyd Thompson Re-Insurance (JLT Re), USA on behalf of Localligence Inc. USA</p>
                <ul>
                  <li>
                    Technologies:
                    <ul>
                      <li>ASP.net MVC, jQuery, HTML, CSS, Kendo UI</li>
                      <li>Bing maps V8 Web Control</li>
                      <li>Web API service hosted on Windows Service framework</li>
                      <li>SQL Server</li>
                    </ul>
                  </li>
                  <li>
                    Modules:
                    <ul>
                      <li>Showing client portfolio heatmaps</li>
                      <li>Showing client portfolio density map</li>
                      <li>Developing service endpoints for showing global map layers</li>
                      <li>Showing global map layers configured for the client</li>
                      <li>Showing selection buffers from the global map layers</li>
                    </ul>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>Video Management System (Digital Watchdog)</Accordion.Header>
              <Accordion.Body>
                <p className="lead">Worked on Video Management System (VMS) plugin application for accessing services and video streams of Digital Watchdog (DW), USA for Galaxy Control Systems (GalaxySys), USA</p>
                <ul>
                  <li>
                    Technologies:
                    <ul>
                      <li>Windows Presentation Framework (WPF)</li>
                      <li>VLC media control for WPF</li>
                    </ul>
                  </li>
                  <li>
                    Modules:
                    <ul>
                      <li>Retrieving DVR related information from the Digital Watchdog servers</li>
                      <li>Retrieving available cameras and their PTZ (Pan-Tilt-Zoom) capabilities</li>
                      <li>Save the above information via Galaxy System Software developed by GalaxySys</li>
                      <li>Show Live and recorded streams on VLC media controls</li>
                      <li>Executing PTZ commands - direct and preset</li>
                    </ul>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>CATography Claims Application (HTML5 version)</Accordion.Header>
              <Accordion.Body>
                <p className="lead">Worked on CATography Claims Application (HTML5 version) for Jardine Lloyd Thompson Re-Insurance (JLT Re), USA on behalf of Localligence Inc. USA</p>
                <ul>
                  <li>
                    Technologies:
                    <ul>
                      <li>ASP.net MVC, jQuery, HTML, CSS, Kendo UI</li>
                      <li>Bing maps V8 Web Control</li>
                      <li>Web API service hosted on Windows Service framework</li>
                      <li>SQL Server</li>
                    </ul>
                  </li>
                  <li>
                    Modules:
                    <ul>
                      <li>Showing client portfolio heatmaps</li>
                      <li>Showing client portfolio density map</li>
                      <li>Developing service endpoints for showing global map layers</li>
                      <li>Showing global map layers configured for the client</li>
                      <li>Showing selection buffers from the global map layers</li>
                    </ul>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
              <Accordion.Header>CATography Insight</Accordion.Header>
              <Accordion.Body>
                <p className="lead">Worked on CATography Insight application for Jardine Lloyd Thompson Re-Insurance (JLT Re), USA on behalf of Localligence Inc. USA</p>
                <ul>
                  <li>
                    Technologies:
                    <ul>
                      <li>ASP.net MVC, jQuery, HTML, CSS, Kendo UI</li>
                      <li>Birst (Business Intelligence Tool)</li>
                      <li>Web API service hosted on Windows Service framework</li>
                      <li>SQL Server</li>
                    </ul>
                  </li>
                  <li>
                    Modules:
                    <ul>
                      <li>Login Module</li>
                      <li>Showing client specific dashboards from Birst</li>
                    </ul>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9">
              <Accordion.Header>CATography Workers' Compensation Application (HTML5 version)</Accordion.Header>
              <Accordion.Body>
                <p className="lead">Worked on CATography Workers' Compensation Application (HTML5 version) for Jardine Lloyd Thompson Re-Insurance (JLT Re), USA on behalf of Localligence Inc. USA </p>
                <ul>
                  <li>
                    Technologies:
                    <ul>
                      <li>ASP.net MVC, jQuery, HTML, CSS, Kendo UI</li>
                      <li>Bing maps V8 Web Control</li>
                      <li>Web API service hosted on Windows Service framework</li>
                      <li>SQL Server</li>
                    </ul>
                  </li>
                  <li>
                    Modules:
                    <ul>
                      <li>Showing client portfolio heatmaps</li>
                      <li>Showing client portfolio density map</li>
                      <li>Developing service endpoints for showing global map layers</li>
                      <li>Showing global map layers configured for the client</li>
                      <li>Showing selection buffers from the global map layers</li>
                    </ul>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="10">
              <Accordion.Header>CATography Underwriter Application (HTML5 version)</Accordion.Header>
              <Accordion.Body>
                <p className="lead">Worked on CATography Underwriter Application (HTML5 version) for Jardine Lloyd Thompson Re-Insurance (JLT Re), USA on behalf of Localligence Inc. USA</p>
                <ul>
                  <li>
                    Technologies:
                    <ul>
                      <li>ASP.net MVC, jQuery, HTML, CSS, Kendo UI</li>
                      <li>Bing maps V8 Web Control</li>
                      <li>Web API service hosted on Windows Service framework</li>
                      <li>SQL Server</li>
                    </ul>
                  </li>
                  <li>
                    Modules:
                    <ul>
                      <li>Showing Client portfolio recorded policies and clusters on map</li>
                      <li>Developing various map tools (Line, Square, Polygon, Circle, Ring) for selection of records on the map</li>
                      <li>Showing client portfolio heatmaps</li>
                      <li>Showing client portfolio density map</li>
                      <li>Developing service endpoints for showing global map layers</li>
                      <li>Showing global map layers configured for the client</li>
                      <li>Showing selection buffers from the global map layers</li>
                    </ul>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="11">
              <Accordion.Header>CATography Claims Administration Application (Silverlight version)</Accordion.Header>
              <Accordion.Body>
                <p className="lead">Worked on CATography Claims Administration Application (Silverlight version) for Towers Watson Re-Insurance (TW), USA on behalf of Localligence Inc. USA</p>
                <ul>
                  <li>
                    Technologies:
                    <ul>
                      <li>ASP.net, Silverlight, Telerik controls for Silverlight</li>
                      <li>Bing maps Silverlight Control</li>
                      <li>WCF service</li>
                      <li>SQL Server</li>
                    </ul>
                  </li>
                  <li>
                    Modules:
                    <ul>
                      <li>Client Database management</li>
                      <li>Client portfolio management</li>
                    </ul>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="12">
              <Accordion.Header>CATography Claims Application (Silverlight version)</Accordion.Header>
              <Accordion.Body>
                <p className="lead">Worked on CATography Claims Application (Silverlight version) for Towers Watson Re-Insurance (TW), USA on behalf of Localligence Inc. USA</p>
                <ul>
                  <li>
                    Technologies:
                    <ul>
                      <li>ASP.net, Silverlight, Telerik controls for Silverlight</li>
                      <li>Bing maps Silverlight Control</li>
                      <li>WCF service</li>
                      <li>SQL Server</li>
                    </ul>
                  </li>
                  <li>
                    Modules:
                    <ul>
                      <li>Showing client portfolio recorded policies and clusters on map</li>
                      <li>Developing various map tools (Line, Square, Polygon, Circle, Ring, Point-In-Polygon) for selection of records on the map</li>
                      <li>Generating and showing client portfolio heatmaps</li>
                      <li>Generating and showing client portfolio density map</li>
                      <li>Retrieving various types of hazard information like storm, hail, hurricane, earthquake</li>
                      <li>Show the hazard data on map and enable users to buffer on the shapes of the hazard data like wind swaths, earthquake zones etc.</li>
                    </ul>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="13">
              <Accordion.Header>CATography Risk Manager Administration Application (Silverlight version)</Accordion.Header>
              <Accordion.Body>
                <p className="lead">Worked on CATography Risk Manager Administration Application (Silverlight version) for Towers Watson Re-Insurance (TW), USA on behalf of Localligence Inc. USA</p>
                <ul>
                  <li>
                    Technologies:
                    <ul>
                      <li>ASP.net, Silverlight, Telerik controls for Silverlight</li>
                      <li>Bing maps Silverlight Control</li>
                      <li>WCF service</li>
                      <li>SQL Server</li>
                    </ul>
                  </li>
                  <li>
                    Modules:
                    <ul>
                      <li>User management</li>
                      <li>Client Database management</li>
                      <li>Client portfolio management</li>
                      <li>Global map layers creation, update, access management</li>
                      <li>Map layers include different types of files including xls, xlsx, mdb, accdb, csv, kml, shp</li>
                    </ul>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="14">
              <Accordion.Header>CATography Risk Manager Application (Silverlight version)</Accordion.Header>
              <Accordion.Body>
                <p className="lead">Worked on CATography Risk Manager Application (Silverlight version) for Towers Watson Re-Insurance (TW), USA on behalf of Localligence Inc. USA</p>
                <ul>
                  <li>
                    Technologies:
                    <ul>
                      <li>ASP.net, Silverlight, Telerik controls for Silverlight</li>
                      <li>Bing maps Silverlight Control</li>
                      <li>WCF service</li>
                      <li>SQL Server</li>
                    </ul>
                  </li>
                  <li>
                    Modules:
                    <ul>
                      <li>Showing client portfolio recorded policies and clusters on map</li>
                      <li>Developing various map tools (Line, Square, Polygon, Circle, Ring, Point-In-Polygon) for selection of records on the map</li>
                      <li>Generating and showing client portfolio heatmaps</li>
                      <li>Generating and showing client portfolio density map</li>
                      <li>Enabling users to upload files to show on the map in runtime</li>
                      <li>File types include xls, xlsx, mdb, accdb, kml, kmz, csv, shp</li>
                      <li>Save the custom layers as projects</li>
                      <li>Share projects between users</li>
                      <li>Showing globally configured layers</li>
                    </ul>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="15">
              <Accordion.Header>CATography Workers' Compensation Application (Silverlight version)</Accordion.Header>
              <Accordion.Body>
                <p className="lead">Worked on CATography Workers' Compensation Application (Silverlight version) for Towers Watson Re-Insurance (TW), USA on behalf of Localligence Inc. USA</p>
                <ul>
                  <li>
                    Technologies:
                    <ul>
                      <li>ASP.net, Silverlight, Telerik controls for Silverlight</li>
                      <li>Bing maps Silverlight Control</li>
                      <li>WCF service</li>
                      <li>SQL Server</li>
                    </ul>
                  </li>
                  <li>
                    Modules:
                    <ul>
                      <li>Showing client portfolio recorded policies and clusters on the map</li>
                      <li>Developing various map tools (Line, Square, Polygon, Circle, Ring, Point-In-Polygon) for selection of records on the map</li>
                      <li>Generating and showing client portfolio heatmaps</li>
                      <li>Generating and showing client portfolio density map</li>
                      <li>Showing various locations with different tiers of danger level to identify areas with potential loss</li>
                    </ul>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}