import IteratingPages from 'hooks/iteratingPages';
import React, { useMemo } from 'react';
import ButtonDefault from 'UI/button/ButtonDefault';

const Pagination = ({page, changePage, totalPages}) => {
    const totalPagesArray = IteratingPages(totalPages)
    return (
        <div className="button-wrapper">
            {
                totalPagesArray.map((p, index) => 
                    <ButtonDefault disabled key={index} onClick={(() => changePage(p))}  className={page === p ? 'currentPage' : 'buttonDefault' }>{p}</ButtonDefault>
                )
            }
        </div>

    )
};

export default Pagination;