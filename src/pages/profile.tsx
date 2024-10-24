import BottomNavigation from "@/components/bottom-navigation";
import HeaderWithBurger from "@/components/header-with-burger";
import { AcademicCapIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  return (
    <>
      <HeaderWithBurger />
      <main className="pt-16 px-4 flex flex-col">
        <h1 className="text-3xl font-semibold mb-2">Володимир Авсієвич</h1>
        <span>Номер заліковки: 12312312</span>
        <span>Факультет пса патрона</span>
        <span>Пес патрон пес патрон</span>
        <span>Група: пса патрона</span>
        <span>Куратор: пса патрона</span>
        <span>Курс: 1</span>

        <Link
          to="/rating"
          className="flex justify-between bg-blue-900 text-white p-2 mt-5 rounded-lg"
        >
          <div className="flex">
            <AcademicCapIcon width={24} />
            <div className="flex flex-col pl-1.5">
              <span className="text-sm">Рейтинг</span>
              <span className="text-xs">Переглянь свій рейтинг</span>
            </div>
          </div>
          <ChevronRightIcon width={24} />
        </Link>
      </main>
      <BottomNavigation />
    </>
  );
}
