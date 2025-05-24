export interface Flight {
    id: string;
    airline: string;
    origin: string;
    destination: string;
    departureTime: string;
    arrivalTime: string;
    price: number;
    cabinClass: string;
    flightDuration: string;
}

export const flights: Flight[] = [
    {
        id: 'SQ001',
        airline: 'Airline 1',
        origin: 'New York (JFK)',
        destination: 'Los Angeles (LAX)',
        departureTime: '10:00 AM',
        arrivalTime: '12:00 PM',
        price: 200,
        cabinClass: 'Economy',
        flightDuration: '12 hours'
    },
    {
        id: 'CX001',
        airline: 'Airline 2',
        origin: 'Tokyo (HND)',
        destination: 'London (LHR)',
        departureTime: '11:00 AM',
        arrivalTime: '14:00 PM',
        price: 2200,
        cabinClass: 'First',
        flightDuration: '14 hours'
    },
    {
        id: 'MU001',
        airline: 'Airline 3',
        origin:'Los Angeles (LAX)',
        destination: 'Paris (CDG)',
        departureTime: '09:00 AM',
        arrivalTime: '13:00 PM',
        price: 1200,
        cabinClass: 'Business',
        flightDuration: '2 hours'
    }
]
