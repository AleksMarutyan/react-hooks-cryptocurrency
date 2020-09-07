import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
    const { handlePaginationClick, page, totalPages } = props;
    return (
        <div className="pagination">
            <button
                className="pagination-button"
                onClick={() => handlePaginationClick('prev')}
                disabled={page === 1}
            >
                &larr;
            </button>

            <span className="pagination-info">
                Page <b>{page}</b> of <b>{totalPages}</b>
            </span>

            <button
                className="pagination-button"
                onClick={() => handlePaginationClick('next')}
                disabled={page === totalPages}
            >
                &rarr;
            </button>
        </div>
    )
}

export default Pagination