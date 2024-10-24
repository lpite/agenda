import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

export default function ScheduleCarousel() {
  return (
    <Carousel>
      <CarouselContent>
        {Array(10)
          .fill("")
          .map(() => (
            <CarouselItem>
              <div className="flex items-center justify-between pt-3.5 pb-2.5 text-blue-900 dark:text-blue-300">
                <span>25 Вересня (Знаменник)</span>
                <div className="flex gap-5 ">
                  <button>
                    <ArrowLongLeftIcon width={24} />
                  </button>
                  <button>
                    <ArrowLongRightIcon width={24} />
                  </button>
                </div>
              </div>
              <div className="border border-solid border-slate-300 dark:border-slate-600 p-2 rounded-lg">
                <div className="flex justify-between text-slate-300">
                  <span>#3 11:10 - 12:30</span>
                  <span>Електротехнічна</span>
                </div>
                <div className="text-slate-950 dark:text-white">
                  Пр. Англійська мова за професійним спрямуванням
                </div>
                <div>Пасічник О.С.</div>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
}
