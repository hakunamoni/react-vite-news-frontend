import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import dateProcess from './dateProcess.jsx';
import fetchArticles from './fetchArticles.jsx';

const FetchArticlesByDate = ({onAriticlesFetched}) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        const fetchArticlesData = async (dateString) => {
            try {
                const arrArticles = await fetchArticles(dateString);
                onAriticlesFetched(arrArticles);
            } catch (e) {
                console.error("Error calling fetchArticles", e);
            }
        };

        const selectedDateString = dateProcess(selectedDate).date2String();
        fetchArticlesData(selectedDateString);
    }, [selectedDate]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    const handleYesterdayClick = () => {
        const yesterday = dateProcess(selectedDate).yesterday();
        setSelectedDate(yesterday);
    }

    const handleTomorrowClick = () => {
        const tomorrow = dateProcess(selectedDate).tomorrow();
        setSelectedDate(tomorrow);
    }

    return (
        <div className="flex items-center py-4">
            <button onClick={handleYesterdayClick} className="flex-none"><img src="/img/arrow/arrow_left.png" className="w-6"/></button>
            <div className="flex-1">
                <DatePicker selected={selectedDate} onChange={handleDateChange} className="text-center rounded-md bg-[#f9f9f9] py-1.5"/>
            </div>
            <button onClick={handleTomorrowClick} className="flex-none"><img src="/img/arrow/arrow_right.png" className="w-6"/></button>
        </div>
    )
};

export default FetchArticlesByDate;