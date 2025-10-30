import { useMemo } from 'react';

interface DateInterface {
  year: number;
  date: number;
  month: string;
  day: string;
}

function MiniCalendar() {
  const date: DateInterface = useMemo(() => {
    const dateObj = new Date();
    return {
      year: dateObj.getFullYear(),
      date: dateObj.getDate(),
      month: dateObj.toLocaleString('default', { month: 'long' }),
      day: dateObj.toLocaleString('default', { weekday: 'long' }),
    };
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-indigo-500">
      <div className="text-center rounded overflow-hidden flex flex-col bg-white">
        <div className="bg-orange-700 text-white text-2xl font-bold px-3 py-2">
          {date?.month} {date?.year}
        </div>
        <div className="text-6xl font-bold px-5 pt-5">{date?.date}</div>
        <div className="pb-1 pt-3 text-gray-500">{date?.day}</div>
      </div>
    </div>
  );
}

export default MiniCalendar;
