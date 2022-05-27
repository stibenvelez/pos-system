import React from 'react'

const Table = ({children}) => {
  return (
      <div className="relative overflow-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              {children}
          </table>
      </div>
  );
}

export default Table;