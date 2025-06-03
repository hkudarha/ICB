import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { div } from "three/tsl";


const eventsData = [
    {
        status: "COMPLETED",
        logo: "/logos/blockchain.png",
        status: "Completed",
        location: "MOSCOW",
        date: "23–24 APRIL 2025",
        buttonColor: "bg-blue-700",
        statusColor: "text-blue-400",
        bgColor: "bg-[#0b1b2a]",
    },
    {
        status: "COMPLETED",
        logo: "/logos/cryptoexpo.png",
        status: "Completed",
        location: "DUBAI",
        date: "21–22 MAY 2025",
        buttonColor: "bg-teal-700",
        statusColor: "text-teal-400",
        bgColor: "bg-[#0b1b2a]",
    },
    {
        status: "UPCOMING",
        logo: "/logos/wow.png",
        status: "UpComming",
        location: "HONG KONG",
        date: "28–29 MAY 2025",
        buttonColor: "bg-orange-600",
        statusColor: "text-orange-400",
        bgColor: "bg-[#1b0b0b]",
    },
];

const UpcomingEvents = () => {
    return (
        <>
            <div className="text-center mt-8 ">
                <div className="inline-block  bg-purple-900/50 rounded-full py-4  px-4 border border-purple-500/30 mb-4 animate-pulse">
                    <span className="text-purple-300 text-sm font-medium tracking-wider capitalize">UPCOMMING EVENTS</span>
                </div>

                <h3 className="text-[2rem] font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent animate-fade-in">
                    Catch Us Around The World

                </h3>


            </div>


            <div className="flex flex-wrap justify-center gap-8 p-10 bg-black">
                {eventsData.map((event, index) => (
                    <div
                        key={index}
                        className={`w-[300px] rounded-xl p-6 shadow-lg border border-white/10 ${event.bgColor}`}
                    >
                        <p className={`uppercase text-sm font-semibold ${event.statusColor}`}>
                            {event.status}
                        </p>

                        <img src={event.logo} alt={event.status} className="h-12 my-4" />

                        <h2 className="text-white text-lg font-bold mb-4">{event.status}</h2>

                        <div className="mb-4 text-white">
                            <div className="flex items-center gap-2 mb-2">
                                <FaMapMarkerAlt />
                                <span className="font-semibold">{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                < FaCalendarAlt />
                                <span className="font-semibold">{event.date}</span>
                            </div>
                        </div>

                        <button
                            className={`${event.buttonColor} text-white px-4 flex items-center justify-between gap-2 py-2 rounded-full font-semibold hover:opacity-90 transition`}
                        >
                            Event Details < FaExternalLinkAlt />
                        </button>
                    </div>
                ))}
            </div>

        </>

    );
};

export default UpcomingEvents;
