import React from 'react'
import PropTypes from 'prop-types'

function Pagination({
  pagination,
  pageActive,
  handlePagination = () => { }
}) {
  let convertPages = Array.from(Array(pagination?.total_pages))
  let convertPageActive = Number(pageActive)
  return (
    <div className='flex flex-col md:flex-row justify-between items-center'>
      <p className='font-display'>Page: {pagination?.page} - Total Pages: {pagination?.total_pages}</p>
      <div className='basis-1/6 mt-10 md:mt-0'>
        <ul className='flex justify-between gap-5 md:gap-0 items-center'>
          {
            convertPages.map((_, i) => (
              <li
                key={i}
                onClick={() => { handlePagination(i + 1) }}
                className={`cursor-pointer text-black px-5 py-2 ${convertPageActive === i + 1 ? 'bg-gray-400' : 'bg-white'} font-display rounded-md border-2 border-black hover:bg-gray-200 `}
              >
                {i + 1}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

Pagination.propTypes = {
  pagination: PropTypes.object,
  pageActive: PropTypes.string,
  handlePagination: PropTypes.func
}

export default Pagination