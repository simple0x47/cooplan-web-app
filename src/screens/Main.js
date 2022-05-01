import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from "react-bootstrap/Button";

function Main()
{
    return (
        <div className="Main">
            <Container className={"vh-100"}>
                <Row className={"overviewRow h-50"}>
                    <Col className={"overviewColumn"}>
                        <Container className={"overviewContainer h-100"}>
                            <h1>Overview</h1>
                        </Container>
                    </Col>
                </Row>

                <Row className={"mainActionsRow h-25"}>
                    <Col className={"mainActionColumn d-grid"} sm={12} md={6} lg={3}>
                        <Button size={"lg"}>Sell</Button>
                    </Col>
                    <Col className={"mainActionColumn d-grid"} sm={12} md={6} lg={3}>
                        <Button size={"lg"}>Offers</Button>
                    </Col>
                    <Col className={"mainActionColumn d-grid"} sm={12} md={6} lg={3}>
                        <Button size={"lg"}>Payments</Button>
                    </Col>
                    <Col className={"mainActionColumn d-grid"} sm={12} md={6} lg={3}>
                        <Button size={"lg"}>Create Plan</Button>
                    </Col>
                </Row>

                <Row className={"secondaryActionsRow h-25"}>
                    <Col className={"secondaryAction"}>
                        <Button variant={"outline-secondary"} size={"sm"}>Listings</Button>
                    </Col>
                    <Col className={"secondaryAction"}>
                        <Button variant={"outline-secondary"} size={"sm"}>Communication</Button>
                    </Col>
                    <Col className={"secondaryAction"}>
                        <Button variant={"outline-secondary"} size={"sm"}>Organization</Button>
                    </Col>
                    <Col className={"secondaryAction"}>
                        <Button variant={"outline-secondary"} size={"sm"}>History</Button>
                    </Col>
                    <Col className={"secondaryAction"}>
                        <Button variant={"outline-secondary"} size={"sm"}>Analytics</Button>
                    </Col>
                    <Col className={"secondaryAction"}>
                        <Button variant={"outline-secondary"} size={"sm"}>Demand</Button>
                    </Col>
                    <Col className={"secondaryAction"}>
                        <Button variant={"outline-secondary"} size={"sm"}>Disputes</Button>
                    </Col>
                    <Col className={"secondaryAction"}>
                        <Button variant={"outline-secondary"} size={"sm"}>Support</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Main;
