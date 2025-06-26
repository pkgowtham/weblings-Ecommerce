import React from "react";
import { useStyle } from "./indexStyle";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
}) => {
  const classes = useStyle();

  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = startPage + maxVisiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Always show first page
    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push("...");
      }
    }

    // Add visible pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Always show last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageChange = (page: any) => {
    if (page !== "..." && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <ul className={classes.pagination}>
      <li className={classes.pageItem}>
        <button
          className={`${classes.pageLink} ${
            currentPage === 1 ? classes.disabledPage : ""
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &laquo;
        </button>
      </li>

      {getPageNumbers().map((page, index) => (
        <li key={index} className={classes.pageItem}>
          {page === "..." ? (
            <span className={classes.ellipsis}>...</span>
          ) : (
            <button
              className={`${classes.pageLink} ${
                page === currentPage ? classes.activePage : ""
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          )}
        </li>
      ))}

      <li className={classes.pageItem}>
        <button
          className={`${classes.pageLink} ${
            currentPage === totalPages ? classes.disabledPage : ""
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &raquo;
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
