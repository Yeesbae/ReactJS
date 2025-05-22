export interface Flight {
    id: string;
    airline: string;
    from: string;
    to: string;
    departureTime: string;
    arrivalTime: string;
    price: number;
    flightClass: string;
    flightDuration: string;
}

export const flights: Flight[] = [
    {
        id: 'SQ001',
        airline: 'Airline 1',
        from: 'New York (JFK)',
        to: 'Los Angeles (LAX)',
        departureTime: '10:00 AM',
        arrivalTime: '12:00 PM',
        price: 200,
        flightClass: 'Economy',
        flightDuration: '12 hours'
    },
    {
        id: 'CX001',
        airline: 'Airline 2',
        from: 'New York (JFK)',
        to: 'Los Angeles (LAX)',
        departureTime: '11:00 AM',
        arrivalTime: '14:00 PM',
        price: 2200,
        flightClass: 'First',
        flightDuration: '14 hours'
    },
    {
        id: 'MU001',
        airline: 'Airline 3',
        from: 'New York (JFK)',
        to: 'Los Angeles (LAX)',
        departureTime: '09:00 AM',
        arrivalTime: '13:00 PM',
        price: 1200,
        flightClass: 'Business',
        flightDuration: '2 hours'
    }
]
