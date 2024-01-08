import React from 'react'

export default function buttons({data}) {
    const handleEdit = (id) => {
        // Implement edit functionality here
        console.log(`Edit button clicked for ID ${id}`);
    };

    const handleDelete = (id) => {
        // Implement delete functionality here
        console.log(`Delete button clicked for ID ${id}`);
    };

    const handleUpdate = (id) => {
        // Implement delete functionality here
        console.log(`Delete button clicked for ID ${id}`);
    };
    return (
        <div>
            <button
                onClick={() => handleEdit(data.id)}
                className='bg-yellow-500 text-white px-2 py-1 rounded-md mr-2'
            >
                Edit
            </button>
            <button
                onClick={() => handleDelete(data.id)}
                className='bg-red-500 text-white px-2 py-1 rounded-md'
            >
                Delete
            </button>
            <button
                onClick={() => handleUpdate(data.id)}
                className='bg-green-500 text-white px-2 py-1 rounded-md'
            >
                Delete
            </button>
        </div>
    )
}
