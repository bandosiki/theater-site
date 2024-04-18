import React, { useState } from "react";

function BuyTicket({ show }) {
    const [ticketCount, setTicketCount] = useState(1);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

    const handleTicketCountChange = (event) => {
        setTicketCount(parseInt(event.target.value));
    };

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Покупка билета:", { show, ticketCount, fullName, email });
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4">Покупка билета</h2>
            <div className="border p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{show.title}</h3>
                <p>Дата: {show.date}</p>
                <p>Количество билетов: {ticketCount}</p>
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <label className="block mb-2">Имя и фамилия:</label>
                        <input
                            type="text"
                            className="w-full border rounded-md py-2 px-3"
                            value={fullName}
                            onChange={handleFullNameChange}
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block mb-2">Email:</label>
                        <input
                            type="email"
                            className="w-full border rounded-md py-2 px-3"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block mb-2">Количество билетов:</label>
                        <input
                            type="number"
                            min="1"
                            className="w-full border rounded-md py-2 px-3"
                            value={ticketCount}
                            onChange={handleTicketCountChange}
                            required
                        />
                    </div>
                    <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Купить билет
                    </button>
                </form>
            </div>
        </div>
    );
}

export default BuyTicket;
