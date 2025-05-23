import React, { useState } from 'react';
import './booking.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { flights } from '../data/flights';

export function Booking() {
    const [formData, setFormData] = useState({
        selectedFlight: null as null | typeof flights[0],
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        passport: "",
        destination: "",
        origin: "",
        flightType: "",
        departureDate: "",
        returnDate: "",
        hour: "",
        minute: "",
        selectedFlightID: "",
        flightPrice: "",
        flightDuration: "",
        flightClass: "",
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        toast.success("Flight booked successfully! \n Name: " + formData.firstName + " " + formData.lastName
            + "\n Flying to " + formData.destination + " from " + formData.origin
            + "\n Departure date & time: " + formData.departureDate + " " + formData.hour + " : " + formData.minute
            + "\n Flight Number: " + formData.selectedFlightID, 
            {
            position: "top-center",
            autoClose: 3000,
        });
    };

    const handleReset = () => {
        setFormData({
            selectedFlight: null,
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            passport: "",
            destination: "",
            origin: "",
            flightType: "",
            departureDate: "",
            returnDate: "",
            hour: "",
            minute: "",
            selectedFlightID: "",
            flightPrice: "",
            flightDuration: "",
            flightClass: "",
        });
    };

    return (
        <div className='booking-page'>
            <form onSubmit={handleSubmit} className="user-form">
                <div id="flight-location">
                    <h1>Select your flight.</h1>
                    <div>
                        <a>from </a>
                        <select name='origin' value={formData.origin} onChange={handleChange}>
                            <option value='London'>London</option>
                            <option value='New York'>New York</option>
                            <option value='Tokyo'>Tokyo</option>
                            <option value='Paris'>Paris</option>
                            <option value='Los Angeles'>Los Angeles</option>
                        </select>
                        
                        <a> to </a>
                        <select name='destination' value={formData.destination} onChange={handleChange}>
                            <option value='London'>London</option>
                            <option value='New York'>New York</option>
                            <option value='Tokyo'>Tokyo</option>
                            <option value='Paris'>Paris</option>
                            <option value='Los Angeles'>Los Angeles</option>
                        </select>
                    </div>
                </div>
                <div id='flight-details'>
                    <h1>Flight Details</h1>
                    <div className='flight-type'>
                        <label htmlFor="one-way">One Way</label>
                        <input type="radio" name="flightType" id='one-way' value="one-way" checked={formData.flightType === "one-way"} onChange={handleChange}/>
                        <label htmlFor="round-trip">Round Trip</label>
                        <input type="radio" name="flightType" id='round-trip' value="round-trip" checked={formData.flightType === "round-trip"} onChange={handleChange} />
                    </div>
                    
                    <h1>Select your flight date and time.</h1>
                    <div>
                        <label>Departure Date: </label>
                        <input type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} />
                        <label> Return Date: </label>
                        <input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="departure-time-hr">Hour </label>
                        <select name="hour" value={formData.hour} onChange={handleChange}>
                            <option value="00">00</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                        </select>
                        <label htmlFor="departure-time-min"> Minute </label>
                        <select name="minute" value={formData.minute} onChange={handleChange}>
                            <option value="00">00</option>
                            <option value="30">30</option>
                        </select>
                    </div>
                </div>
                <div id='user-detail'>
                    <h1>Your details.</h1>
                    <div>
                        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                        <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                        <input type="text" name="passport" placeholder="Passport Number" value={formData.passport} onChange={handleChange} required />
                    </div>
                </div>
                <div>
                    <h1>Flight Lists</h1>
                    <table id="flight-table">
                        <tr>
                            <th>Flight Number</th>
                            <th>Origin</th>
                            <th>Destination</th>
                            <th>Departure Time</th>
                            <th>Arrival Time</th>
                            <th>Flight Duration</th>
                            <th>Flight Class</th>
                            <th>Price (SGD)</th>
                            <th>Select</th>
                        </tr>
                        {flights.map((flight) => (
                            <tr key={flight.id}>
                                <td>{flight.id}</td>
                                <td>{flight.from}</td>
                                <td>{flight.to}</td>
                                <td>{flight.departureTime}</td>
                                <td>{flight.arrivalTime}</td>
                                <td>{flight.flightDuration}</td>
                                <td>{flight.flightClass}</td>
                                <td>{flight.price}</td>
                                <td><input 
                                        type='radio' 
                                        name="selectedFlight" 
                                        value={flight.id} 
                                        checked={formData.selectedFlightID === flight.id} 
                                        onChange={() => 
                                            setFormData((prev) => ({
                                                ...prev,
                                                origin: String(flight.from),
                                                destination: String(flight.to),
                                                selectedFlightID: flight.id,
                                                flightPrice: String(flight.price),
                                                flightClass: flight.flightClass,
                                                flightDuration: String(flight.flightDuration),
                                            }))
                                        } />
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div id="flight-summary">
                <h1>Flight Summary</h1>
                <div>
                    {formData.selectedFlightID ? (
                        <div>
                            <ul>
                                <li><strong>Flight number: </strong>{formData.selectedFlightID}</li>
                                <li><strong>Destination: </strong>{formData.destination}</li>
                                <li><strong>Origin: </strong>{formData.origin}</li>
                                <li><strong>Departure Date: </strong>{formData.departureDate}</li>
                                <li><strong>Return Date: </strong>{formData.returnDate}</li>
                                <li><strong>Departure Time: </strong>{formData.hour + " : " + formData.minute}</li>
                                <li><strong>Type: </strong>{formData.flightType}</li>
                                <li><strong>Class:</strong> {formData.flightClass}</li>
                                <li><strong>Duration:</strong> {formData.flightDuration}</li>
                                <li><strong>Price:</strong> SGD {formData.flightPrice}</li>
                            </ul>
                            <button type="button" onClick={handleReset}>Clear all value</button>
                        </div>
                        
                    ) : (
                        <p>No flight selected.</p>
                    )}
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}