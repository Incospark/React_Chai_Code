import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* IMAGE */}
                    <div className="flex justify-center">
                        <img
                            className="w-[450px] rounded-xl shadow-xl hover:scale-105 transition duration-300"
                            src="https://images.pexels.com/photos/2343170/pexels-photo-2343170.jpeg"
                            alt="React Development"
                        />
                    </div>

                    {/* TEXT CONTENT */}
                    <div className="space-y-6 text-center md:text-left">

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            React development is carried out by
                            <span className="block text-orange-600">
                                passionate developers
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eum omnis voluptatem accusantium nemo perspiciatis delectus
                            atque autem! Voluptatum tenetur beatae unde aperiam.
                        </p>

                        <p className="text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat
                            iure expedita at? Asperiores nemo possimus nesciunt dicta
                            veniam aspernatur quam mollitia.
                        </p>

                        {/* BUTTON */}
                        <Link
                            to="/"
                            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-orange-700 hover:scale-105 transition duration-300"
                        >
                            Back to Home
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
}