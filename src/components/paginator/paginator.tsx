import React from 'react';
import {setPageNumberAC} from '../../redux/reducer';
import {useDispatch, useSelector} from 'react-redux';
import {getPageNumber, getPerPage} from '../../redux/selectors';
import './paginator.scss';

type PropsType = {
    totalCount: number
}

function Paginator({totalCount}: PropsType) {
    const dispatch = useDispatch()
    const pageNumber = useSelector(getPageNumber)
    const perPage = useSelector(getPerPage)

    const onPageNumber = (number: number) => {
        dispatch(setPageNumberAC(number))
    }

    let pageCount = Math.ceil(totalCount / perPage);

    const shift: number = 2
    let i = pageNumber - shift
    let j = pageNumber + shift

    if (pageNumber - shift <= 0) {
        j = j - (pageNumber - shift - 1)
        i = 1
    }

    if (pageCount - pageNumber < shift) {
       i = i + (pageCount - pageNumber - shift)
    }

    let pages: Array<number> = [];
    for (i; i <= j && i <= pageCount; i++) {
        i > 0 && pages.push(i);
    }

    return (
        <div className="pagination">
            <div className="pagination__wrapper">
                <div>
                    <div className="pagination__total-pages">Total {pageCount} pages</div>
                </div>
                <div>
                    <button className="pagination__link" disabled={pageNumber <= 1} onClick={(e) => {
                        const count = pageNumber - 1
                        onPageNumber(count)
                    }}> Previous
                    </button>
                </div>
                {pages.map(p =>
                    <div key={p}>
                        <button className={pageNumber === p ? "pagination__selected-page" : "pagination__not-selected"}
                                onClick={() => {
                                    onPageNumber(p);
                                }}> {p} </button>
                    </div>
                )}
                <div>
                    <button className="pagination__link" disabled={pageNumber >= pageCount} onClick={(e) => {
                        const count = pageNumber + 1
                        onPageNumber(count)
                    }}> Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Paginator;
