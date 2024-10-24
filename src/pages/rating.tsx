import HeaderWithLabel from "@/components/header-with-label";

export default function RatingPage() {
  return (
    <>
      <HeaderWithLabel pageName="Рейтинг" />
      <main className="px-4 mt-8 pb-24 h-full overflow-auto">
        {Array(100)
          .fill(0)
          .map((_, i) => (
            <div className="text-slate-950 dark:text-white border rounded-lg border-slate-300 dark:border-slate-600 p-2 mb-1.5">
              {i + 1}. Пес патрон
            </div>
          ))}
      </main>
    </>
  );
}
