import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import Calendar from './Calendar';

class Appointment extends Component {
    selectRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    
    randomAppointments(month) {
        const slots = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
        const patients = [null,1,2,3,4,5,6,7,8,9,10];
        
        const timeslots = slots.reduce((acc, slot) => {
            return acc[slot] = this.selectRandomElement(patients);
        }, {});
        
        return {
            month: month,
            timeslots: timeslots,
        };
    }
    
    render() {
        
        const months = [1,2,3,4,5,6,7,8,9,10,11,12];
        
        const appointments = months.reduce((acc, month) => {
            return Object.assign(acc, this.randomAppointments(month))
        }, {});
        
        console.log(appointments);
        
        return <Container>
            <Calendar doctor='Dr. Azimah' appointments={{ 
                month: 4,
                timeslots: {
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4,
                },
            }} />
        </Container>;
    }
}

export default Appointment;