"use client";

import { useEffect, useState } from "react";
import Form from "next/form";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <main className="min-h-screen">
        <section className="min-h-screen pt-24 lg:py-16">
          <div className="min-h-screen text-4xl mt-10 ">
            <div className="mb-6 md:mb-16 text-center font-bold">
              <h1>Contact Me!</h1>
            </div>
            <div className="flex justify-center lg:mx-64">
              <Form className="min-w-full">
                <div>
                  <div className="bg-[#37353E] border border-gray-900 p-10 pb-12 rounded-md">
                    <h2 className="text-base/7 font-semibold">
                      Hello! What&apos;s your problems?
                    </h2>
                    <p className="mt-1 text-sm/6 text-gray">
                      Feel free to message me if you have any questions.
                    </p>

                    <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
                      <div className="sm:col-span-1">
                        <label
                          htmlFor="first-name"
                          className="block text-sm/6 font-medium text-gray"
                        >
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
                        <label
                          htmlFor="last-name"
                          className="block text-sm/6 font-medium text-gray"
                        >
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
                        <label
                          htmlFor="last-name"
                          className="block text-sm/6 font-medium text-gray"
                        >
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
                        <label
                          htmlFor="email"
                          className="block text-sm/6 font-medium text-gray"
                        >
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
                        <label
                          htmlFor="about"
                          className="block text-sm/6 font-medium text-gray"
                        >
                          Message
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="message"
                            name="message"
                            rows={6}
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            defaultValue={""}
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
                      <Link
                        href="/"
                        type="button"
                        className="text-sm/6 font-semibold text-red-600 cursor-pointer"
                      >
                        Cancel
                      </Link>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
