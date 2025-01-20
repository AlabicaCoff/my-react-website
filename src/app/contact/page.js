'use client'

import { useEffect, useState } from 'react';
import Form from 'next/form'
import Link from 'next/link';

export default function Contact() {

  const [location, setLocation] = useState({ lat: null, lon: null });
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  // Your OpenWeather API key
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
        },
        (err) => {
          setError("Unable to retrieve your location. Please enable location services.");
          console.error(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        setWeather(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchWeather();
  }, [location, apiKey]);

    return <>
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-100">
        <section className="min-h-screen pt-24 lg:py-16">
          <div className="min-h-screen text-4xl mt-10 ">
            <div className="mb-6 md:mb-16 text-center font-bold">
              <h1>Contact Me!</h1>
            </div>
            <div className='flex justify-center lg:mx-64'>
              <Form className='min-w-full'>
                <div >
                  <div className="border border-gray-900 p-10 pb-12 rounded-md">
                      <h2 className="text-base/7 font-semibold text-gray-900">Hello! What's your problems?</h2>
                      <p className="mt-1 text-sm/6 text-gray-600">Feel free to message me if you have any questions.</p>

                      <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
                        <div className="sm:col-span-1">
                          <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                            First name
                          </label>
                          <div className="mt-2">
                            <input
                              id="first-name"
                              name="first-name"
                              type="text"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              required
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-1">
                          <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                            Middle name
                          </label>
                          <div className="mt-2">
                            <input
                              id="mid-name"
                              name="mid-name"
                              type="text"
                              autoComplete="family-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-1">
                          <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                            Last name
                          </label>
                          <div className="mt-2">
                            <input
                              id="last-name"
                              name="last-name"
                              type="text"
                              autoComplete="family-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              required
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-1">
                          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Email address
                          </label>
                          <div className="mt-2">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-span-full">
                          <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                            Message
                          </label>
                          <div className="mt-2">
                            <textarea
                              id="message"
                              name="message"
                              rows={6}
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              defaultValue={''}
                              required
                            />
                          </div>
                      </div>
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-x-6">
                    <button
                      type="submit"
                      className="rounded-md bg-gray-900/85 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Submit
                    </button>
                    <Link href="/" type="button" className="text-sm/6 font-semibold text-red-600 cursor-pointer">
                      Cancel
                    </Link>
                  </div>
                </div>
                </div>
                
              </Form>

            </div>
          </div>
        </section>
        <div className="fixed bottom-2 right-2 bg-gray-100">
          {error ? (
            <p className="text-red-600">{error}</p>
          ) : weather ? (
            <div className="p-6 bg-white rounded-md shadow-md text-center">
              <h2 className="text-xl font-semibold">{weather.name}</h2>
              <p className="text-lg">{Math.round(weather.main.temp)}°C</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
      </div>
      </main>
    </>
  }