import React from 'react'

const Row = ({ children }) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            {children}
        </tr>
    );
};

export default Row