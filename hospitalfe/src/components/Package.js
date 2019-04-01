import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import womans_wellness_package_image from '../images/womans_wellness_package.jpg';
import womans_wellness_package_image_2 from '../images/womans_wellness_package_2.jpg';
import neonatal_jaundice_test_package_image from '../images/neonatal_jaundice_test.jpg';
import corporate_wellness_screening_package_image from '../images/corporate_wellness_screening.jpg';
import scanner_3D_4D_hd_live from '../images/3D_4D_HD_live.png';


class Package extends Component {
    state = {
        packages: [],
    };

    componentDidMount() {
        const samplePackage = [1,2,3,4,5,6];
        const package_image = [
            womans_wellness_package_image,
            womans_wellness_package_image_2,
            neonatal_jaundice_test_package_image,
            corporate_wellness_screening_package_image,
            scanner_3D_4D_hd_live,
        ];

        this.setState({
            packages: samplePackage.map((item, index) =>
                <Card key={index} style={{
                    margin: '1em',
                    width: "15em"
                }}>
                    <Card.Img variant="top" src={package_image[Math.floor(Math.random() * package_image.length)]} />
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text> */}
                        <Button variant="primary">Make Appointment</Button>
                    </Card.Body>
                </Card>),
        });
    }

    render() {
        return <Container style={{
            display: 'flex',
            justifyContent: 'center',
            flexFlow: 'row wrap',
        }}>
            {this.state.packages}
        </Container>;
    }
}

export default Package;