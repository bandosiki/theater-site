import React from "react";
import ShowCard from "./components/ShowCard";

function Main() {
    const generateDateRange = (startDate, numberOfDays) => {
        const dateRange = [];
        for (let i = 0; i < numberOfDays; i++) {
            const currentDate = new Date(startDate);
            currentDate.setDate(currentDate.getDate() + i);
            dateRange.push(currentDate);
        }
        return dateRange;
    };

    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1; 
        const year = date.getFullYear();
        return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
    };

    const today = new Date();
    const numberOfDays = 7;

    const showPupolarTitles = [
        "Ромео и Джульетта",
        "Вишневый сад",
        "Отелло"
    ];
    const showUpcomingTitles = [
        "Шекспир. Сон в летнюю ночь",
        "Евгений Онегин",
        "Анна Каренина",
        "Гамлет"
    ]

    const popularShows = generateDateRange(today, numberOfDays).map((date, index) => ({
        title: showPupolarTitles[index % showPupolarTitles.length], 
        date: `${formatDate(date)} - ${formatDate(new Date(date.setDate(date.getDate() + 10)))}`,
        imageSrc: "https://via.placeholder.com/300"
    }));

    const upcomingShows = generateDateRange(new Date(today.setDate(today.getDate() + numberOfDays)), numberOfDays).map((date, index) => ({
        title: showUpcomingTitles[index % showUpcomingTitles.length], 
        date: formatDate(date),
        imageSrc: "https://via.placeholder.com/300"
    }));

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <div className="container mx-auto mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Самое популярное</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {popularShows.map((show, index) => (
                            <ShowCard key={index} title={show.title} date={show.date} imageSrc={show.imageSrc} index={index} />
                        ))}
                    </div>
                    <h2 className="text-2xl font-semibold mb-4 mt-8">Предстоящие спектакли</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {upcomingShows.map((show, index) => (
                            <ShowCard key={index + popularShows.length} title={show.title} date={show.date} imageSrc={show.imageSrc} index={index} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Main;
