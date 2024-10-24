import { CalendarDaysIcon, TableCellsIcon } from "@heroicons/react/24/outline";

import { useState } from "react";
import HeaderWithBurger from "@/components/header-with-burger";
import BottomNavigation from "@/components/bottom-navigation";
import ScheduleCarousel from "@/components/schedule-carousel";
import JournalsList from "@/components/journals-list";

export default function MainPage() {
  const [page, setPage] = useState<"schedule" | "journals">("schedule");
  return (
    <>
      <HeaderWithBurger />
      <main className="px-4 pt-20 h-full overflow-hidden flex flex-col">
        <h1 className="font-semibold text-3xl text-slate-950 dark:text-white">
          Привіт, Володимир!
        </h1>
        <div className="flex pt-2.5 gap-1.5">
          <button
            onMouseDown={() => setPage("schedule")}
            className={`flex px-7 py-3 ${page === "schedule" ? "bg-blue-900 text-white" : "text-blue-900 bg-blue-50"} rounded-2xl  gap-1.5`}
          >
            <CalendarDaysIcon width={24} /> Розклад
          </button>
          <button
            onMouseDown={() => setPage("journals")}
            className={`flex px-7 py-3 ${page === "journals" ? "bg-blue-900 text-white" : "text-blue-900 bg-blue-50"} rounded-2xl  gap-1.5`}
          >
            <TableCellsIcon width={24} /> Журнал
          </button>
        </div>
        {page === "schedule" ? <ScheduleCarousel /> : null}
        {page === "journals" ? <JournalsList /> : null}
      </main>
      <BottomNavigation />
    </>
  );
}
