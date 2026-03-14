import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="w-full bg-gray-50">

            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT IMAGE */}
                <div className="flex justify-center">
                    <img
                        className="w-[420px] rounded-xl shadow-xl hover:scale-105 transition duration-300"
                        src="https://images.pexels.com/photos/4027948/pexels-photo-4027948.jpeg"
                        alt="hero"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div className="space-y-6 text-center md:text-left">

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Download Now
                        <span className="block text-orange-600">
                            Lorem Ipsum
                        </span>
                    </h1>

                    <p className="text-gray-600 text-lg">
                        Build modern React applications with powerful tools and beautiful UI.
                        Fast, scalable and easy to maintain.
                    </p>

                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-orange-700 hover:scale-105 transition duration-300"
                    >
                        {/* ICON */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v12m0 0l4-4m-4 4l-4-4m8 6H8"
                            />
                        </svg>

                        Download Now
                    </Link>

                </div>
            </section>


            {/* SECOND SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-16 text-center">

                <img
                    className="mx-auto w-[420px] rounded-xl shadow-lg hover:scale-105 transition duration-300"
                    src="https://images.pexels.com/photos/1662350/pexels-photo-1662350.jpeg"
                    alt="market"
                />

                <h2 className="mt-10 text-3xl md:text-4xl font-semibold text-gray-800">
                    Lorem Ipsum Yojo
                </h2>

                <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quasi, deserunt. Create beautiful UI components with React
                    and Tailwind CSS easily.
                </p>

            </section>

        </div>
    );
}