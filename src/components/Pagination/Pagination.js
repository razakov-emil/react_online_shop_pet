import "./Pagination.css";

export default function Pagination({ pages, currentPage, setCurrentPage }) {
  return (
    <div className="pagination">
      {Array.from({ length: pages }, (_, i) => {
        const pageNumber = i + 1;
        if (
          pageNumber === 1 ||
          pageNumber === pages ||
          pageNumber === currentPage - 1 ||
          pageNumber === currentPage ||
          pageNumber === currentPage + 1
        ) {
          return (
            <button
              key={pageNumber}
              className={
                currentPage === pageNumber
                  ? "page-button current-page"
                  : "page-button"
              }
              onClick={() => {
                if (currentPage !== pageNumber) {
                  setCurrentPage(pageNumber);
                }
              }}
            >
              {pageNumber}
            </button>
          );
        }

        if (
          (pageNumber === 2 && currentPage > 3) ||
          (pageNumber === pages - 1 && currentPage < pages - 2)
        ) {
          return (
            <span key={pageNumber} className="page-overflow">
              ...
            </span>
          );
        }

        return null;
      })}
    </div>
  );
}
