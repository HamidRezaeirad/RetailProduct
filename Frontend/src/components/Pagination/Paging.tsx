import classNames from "classnames";
import React from "react";
import { PagingProps } from "../../interfaces/Paging.props";

/**
 *
 * @param total number the number of items
 * @param perPage number|string Pages divied by perPage
 * @param currentPage number the current page index
 * @param onChange function the onChange function
 * @returns Paging react component
 */
const Paging: React.FC<PagingProps> = ({
  total,
  perPage,
  currentPage,
  onChange,
}) => {
  const TotalPageNumberToView = 5;
  let hasPreDots = false;
  let hasPostDots = false;
  let btnArray: number = null;
  let numberOfPages = 0;

  const performPagination = () => {
    numberOfPages = Math.ceil(total / (perPage as number));
    const TotalPageNumberToViewHalf = Math.floor(TotalPageNumberToView / 2);
    hasPostDots =
      numberOfPages - currentPage > TotalPageNumberToViewHalf &&
      numberOfPages > TotalPageNumberToView;

    let startPage = 0;
    if (currentPage > TotalPageNumberToViewHalf + 1) {
      if (numberOfPages - currentPage > TotalPageNumberToViewHalf) {
        startPage = currentPage - TotalPageNumberToViewHalf;
      } else {
        if (numberOfPages > TotalPageNumberToView) {
          startPage = numberOfPages - TotalPageNumberToView + 1;
        } else {
          startPage = 1;
        }
      }
    } else {
      startPage = 1;
    }

    btnArray = Array(
      numberOfPages > TotalPageNumberToView
        ? TotalPageNumberToView
        : numberOfPages
    )
      .fill(undefined)
      .map((item, index) => {
        return startPage + index;
      });
  };

  const pages = () => {
    return btnArray.map((item: number) => {
      return (
        <button
          type="button"
          className={classNames("btn btn-sm", {
            "btn-outline-secondary": currentPage !== item,
            "btn-secondary": currentPage === item,
          })}
          key={item}
          onClick={(event) => onChange(event, item)}
        >
          {item}
        </button>
      );
    });
  };

  const getPrePostBtns = (direction: string) => {
    let disabled =
      ((direction === "pre" || direction === "first") && currentPage === 1) ||
      ((direction === "post" || direction === "last") &&
        currentPage === numberOfPages);

    let pageToGo = 0;
    let text = "";

    switch (direction) {
      case "first":
        pageToGo = 1;
        text = "<<";
        break;
      case "pre":
        pageToGo = currentPage > 1 ? currentPage - 1 : 1;
        text = "<";
        break;
      case "post":
        pageToGo =
          currentPage < numberOfPages ? currentPage + 1 : numberOfPages;
        text = ">";
        break;
      case "last":
        pageToGo = numberOfPages;
        text = ">>";
        break;
      default:
    }

    return (
      <button
        type="button"
        className={classNames("btn btn-sm", {
          "btn-outline-secondary": true,
        })}
        key={direction}
        disabled={disabled}
        onClick={(event) => onChange(event, pageToGo)}
      >
        {text}
      </button>
    );
  };

  return (
    (total > 0 && (
      <div className="row pb-5">
        <div className="col-11">
          <div className="btn-toolbar" role="toolbar">
            <div className="btn-group mr-2" role="group">
              {performPagination()}
              {getPrePostBtns("first")}
              {getPrePostBtns("pre")}
              {hasPreDots && <div>...</div>}
              {pages()}
              {hasPostDots && <div>...</div>}
              {getPrePostBtns("post")}
              {getPrePostBtns("last")}
            </div>
          </div>
        </div>
        <div className="col-1 text-secondary">({total} Items)</div>
      </div>
    )) || <></>
  );
};

export default Paging;
