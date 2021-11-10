import React from "react";

interface TablePaginationProps {
  numButs: number;
  activeBut: number;
  paginOnClick: Function;
}

export const TablePagination: React.FC<TablePaginationProps> = ({
  numButs,
  activeBut,
  paginOnClick,
}) => {
  return (
    <div data-testid={"pagin-div"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-caret-left-fill"
        viewBox="0 0 16 16"
        onClick={() => paginOnClick(1)}
        data-testid={"first-button"}
      >
        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-caret-left"
        viewBox="0 0 16 16"
        onClick={() => paginOnClick(Math.max(activeBut - 1, 1))}
        data-testid={"second-button"}
      >
        <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
      </svg>
      {activeBut} / {numButs}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-caret-right"
        viewBox="0 0 16 16"
        onClick={() => paginOnClick(Math.min(activeBut + 1, numButs))}
        data-testid={"third-button"}
      >
        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-caret-right-fill"
        viewBox="0 0 16 16"
        onClick={() => paginOnClick(numButs)}
        data-testid={"fourth-button"}
      >
        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
      </svg>
    </div>
  );
};
