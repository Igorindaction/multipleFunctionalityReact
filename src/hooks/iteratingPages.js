import React, { useMemo } from 'react';



export const IteratingPages = (totalPages) => {
    let pagesArray = []
    const iteratingArray = useMemo(() => {
      for (let i = 0; i < totalPages; i++){
        pagesArray.push(i + 1)
        console.log('перебор массива')
      }
    },[totalPages, pagesArray])

    return pagesArray
}

export default IteratingPages;