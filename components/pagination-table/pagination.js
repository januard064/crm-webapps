import React from 'react';
import { useMemo } from 'react';

import styles from './pagination-table.module.css'

// import icons
import ArrowLeft from '../icons/arrow-left';

export const DOTS = '...';

const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage
}) => {
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);

        // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
        const totalPageNumbers = siblingCount + 5;

        /*
          If the number of pages is less than the page numbers we want to show in our
          paginationComponent, we return the range [1..totalPageCount]
        */
        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount
        );

        /*
          We do not want to show dots if there is only one position left 
          after/before the left/right page count as that would lead to a change if our Pagination
          component size which we do not want
        */
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);

            return [...leftRange, DOTS, totalPageCount];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(
                totalPageCount - rightItemCount + 1,
                totalPageCount
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [totalCount, pageSize, siblingCount, currentPage]);

    return paginationRange;
};

const Pagination = (props) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <>

            <div className={styles.paginationContainer}>
                <div onClick={onPrevious} className={styles.paginationButton} style={{ pointerEvents: currentPage == 1 ? 'none' : '' }}>
                    <div className={styles.flexCenter} style={{ marginRight: '8px' }} >
                        <ArrowLeft />
                    </div>
                    <div>Previous</div>
                </div>

                <div className={styles.paginationRangeContainer}>
                    {paginationRange.map((pageNumber) => {
                        if (pageNumber === DOTS) {
                            return <li >&#8230;</li>;
                        }

                        return (
                            <div style={{ background: currentPage == pageNumber ? '#F9FAFB' : '' }} className={styles.paginationRange} onClick={() => onPageChange(pageNumber)}>
                                {pageNumber}
                            </div>
                        );
                    })}
                </div>

                <div onClick={onNext} className={styles.paginationButton} style={{ pointerEvents: currentPage == lastPage ? 'none' : '' }}>
                    <div>Next</div>
                    <div className={styles.flexCenter} style={{ marginLeft: '8px', transform: 'rotate(180deg)' }} >
                        <ArrowLeft />
                    </div>
                </div>
            </div>

        </>

    );
};

export default Pagination;



