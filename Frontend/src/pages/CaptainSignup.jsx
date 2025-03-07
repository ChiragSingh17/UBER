import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/Captain.Context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const { captain,setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async(e) => {
    e.preventDefault()
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captians/register`, captainData)
    if (response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
  }

  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
          <img className='w-20 mb-2' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <h3
              className='text-base font-medium mb-2'
            >What's our Captain's name</h3>
            <div className='flex gap-4'>
              <input
                required
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                className='bg-[#eeeeee] mb-7 w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
                type="text"
                placeholder='First name' />
              <input
                required
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
                className='bg-[#eeeeee] mb-7 w-1/2 rounded px-4 py-2 border  text-base placeholder:text-sm'
                type="text"
                placeholder='Last name' />

            </div>

            <h3 className='text-base font-medium mb-2'>What's our Captain's email</h3>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
              type="email"
              placeholder='email@example.com' />

            <h3 className='text-base font-medium mb-2'>Enter Password</h3>
            <input
              className='bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              type="password"
              placeholder='password' />

            <h3 className='text-base font-medium mb-2'>Vehicle Color</h3>
            <input
              required
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
              type="text"
              placeholder='Vehicle Color' />

            <h3 className='text-base font-medium mb-2'>Vehicle Plate</h3>
            <input
              required
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
              type="text"
              placeholder='Vehicle Plate' />

            <h3 className='text-base font-medium mb-2'>Vehicle Capacity</h3>
            <input
              required
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
              type="number"
              placeholder='Vehicle Capacity' />

            <h3 className='text-base font-medium mb-2'>Vehicle Type</h3>
            <select
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm'>
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
            <button className='bg-black text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            >Create Captain Account</button>
            <p className='text-center'>Already have a account?  <Link to='/captain-login' className='text-blue-600 '>Login here</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CaptainSignup
