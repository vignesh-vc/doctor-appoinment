import React from 'react';

const ClinicInfo = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 pt-[100px] pb-[100px] flex flex-col md:flex-row gap-8">
            {/* Left: Map and Address */}
            <div className="md:w-1/2">
                <h1 className="text-3xl font-bold mb-2">My Clinic</h1>
                <h2 className="text-xl font-semibold mb-4">Clinic 1</h2>
                <h3 className="text-xl font-semibold mb-4">OPD Hours</h3>
                <table className="w-full text-left border-collapse">
                    {[
                        { day: 'Monday', time: '6:30 PM–8:30 PM' },
                        { day: 'Tuesday', time: '6:30 PM–8:30 PM' },
                        { day: 'Wednesday', time: '6:30 PM–8:30 PM' },
                        { day: 'Thursday', time: '6:30 PM–8:30 PM' },
                        { day: 'Friday', time: '6:30 PM–8:30 PM' },
                        { day: 'Saturday', time: 'Closed', closed: true },
                        { day: 'Sunday', time: 'Closed', closed: true },
                    ].map(({ day, time, closed }, i) => (
                        <tr key={i} className="border-b">
                            <td className={`py-2 font-medium ${closed ? 'text-red-600' : ''}`}>{day}</td>
                            <td className={`py-2 ${closed ? 'text-red-600' : ''}`}>{time}</td>
                        </tr>
                    ))}
                </table>
            </div>

            {/* Right: OPD Hours */}

            <div className="md:w-1/2">

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.317399440248!2d77.5891!3d13.0185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae177cd73674f3%3A0x3dbd3f8e0f6e4a2c!2sDr.%20Pradeep%20Kumar%20D!5e0!3m2!1sen!2sin!4v123456789"
                    width="100%"
                    height="350"
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-md border"
                ></iframe>
                <p className="mt-4 text-gray-700">
                    ADDRESS: 670Glades Rd, Suite 110 Boca Raton, FL 33431
                </p>
                <div className="mt-4 flex gap-4">
                    <button className="px-4 py-2 border border-[#336699] text-white bg-[#336699] rounded hover:bg-white transition-colors duration-300 hover:text-[#336699]">
                        DIRECTIONS
                    </button>
                    <button className="px-4 py-2 border border-[#336699] text-white bg-[#336699] rounded hover:bg-white transition-colors duration-300 hover:text-[#336699]">
                        CALL CLINIC
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ClinicInfo;
