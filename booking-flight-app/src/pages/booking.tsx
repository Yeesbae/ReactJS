import React from 'react';
import './booking.css';
import { flights } from '../data/flights';

function Booking() {
    return (
        <div>
            <div>
                <h1>Select your flight.</h1>
                <a>from </a>
                <select name='origin' id='origin'>
                    <option value='London'>London</option>
                    <option value='New York'>New York</option>
                    <option value='Tokyo'>Tokyo</option>
                    <option value='Paris'>Paris</option>
                    <option value='Dubai'>Dubai</option>
                </select>
                
                <a> to </a>
                <select name='destination' id='destination'>
                    <option value='London'>London</option>
                    <option value='New York'>New York</option>
                    <option value='Tokyo'>Tokyo</option>
                    <option value='Paris'>Paris</option>
                    <option value='Dubai'>Dubai</option>
                </select>
            </div>
            <div>
                <h1>Flight Details</h1>
                <input type="radio" name="flight-type" id="one-way" value="one-way" />
                <label htmlFor="one-way">One Way</label>
                <input type="radio" name="flight-type" id="round-trip" value="round-trip" />
                <label htmlFor="round-trip">Round Trip</label>

                <h1>Select your flight date.</h1>
                <label htmlFor="departure-date">Departure Date: </label>
                <input type="date" />
                <label htmlFor="return-date"> Return Date: </label>
                <input type="date" />

                <h1>Select your flight time.</h1>
                {/* <label htmlFor="departure-time">Departure Time: </label>
                <input type="time" />
                <label htmlFor="return-time"> Return Time: </label>
                <input type="time" /> */}
                <label htmlFor="departure-time-hr">Hour </label>
                    <select name="departure-time-hr" id="departure-time-hr">
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
                    <select name="departure-time-min" id="departure-time-min">
                        <option value="00">00</option>
                        <option value="30">30</option>
                    </select>
            </div>
            <div>
                <h1>Flight Lists</h1>
                <table className="flight-table">
                    <tr>
                        <th>Flight Number</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Departure Time</th>
                        <th>Arrival Time</th>
                        <th>Flight Duration</th>
                        <th>Flight Class</th>
                        <th>Price</th>
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
                        </tr>
                    ))}
                </table>
            </div>
            <div>
                <h1>Please Enter your Particulars.</h1>
                <form className='particulars'>
                    <input type="text" placeholder="First Name" required />
                    <input type="text" placeholder="Last Name" required />
                    <input type="text" placeholder="Email" required />
                    <input type="text" placeholder="Phone Number" required />
                    <input type="text" placeholder="Passport Number" required />
                </form>
            </div>

            <div>
                <p>Submit</p>
            </div>
        </div>
    )
}

export default Booking;