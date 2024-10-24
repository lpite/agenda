import { Link } from "react-router-dom";

export default function JournalsList() {
  return (
    <div className="mt-5 mb-12 overflow-auto grow">
      {Array(6)
        .fill(0)
        .map(() => (
          <Link to="/" className="flex p-1.5 border rounded-lg mb-1.5">
            Англійська мова за професійним спрямуванням
          </Link>
        ))}
    </div>
  );
}
