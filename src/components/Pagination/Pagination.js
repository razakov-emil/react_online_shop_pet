import "./Pagination.css";

export default function Pagination({ pages, currentPage, setCurrentPage }) {
  return (
    <div className="pagination">
      {Array.from({ length: pages }, (_, i) => (
        <button
          key={i + 1}
          className={
            currentPage === i + 1 ? "page-button current-page" : "page-button"
          }
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
