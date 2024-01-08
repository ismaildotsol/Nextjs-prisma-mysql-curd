"use client";
import React, { useState } from 'react';
import InfoTbl from './infoTbl.js/page';

export default function CurdOpration() {
    const [name, setName] = useState('');
    const [data, setData] = useState([]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Create a new data object with a unique ID
        const newData = {
            id: new Date().getTime(),
            name: name,
        };

        // Update the data array
        setData((prevData) => [...prevData, newData]);

        // Clear the input field
        setName('');
    };

    const handleEdit = (editedData) => {
        // Implement edit functionality here
        // Find the index of the item in the data array
        const index = data.findIndex(item => item.id === editedData.id);

        // Create a copy of the data array
        const updatedData = [...data];

        // Update the item at the found index with the edited data
        updatedData[index] = editedData;

        // Set the updated data array
        setData(updatedData);
    };

    const handleDelete = (id) => {
        // Implement delete functionality here
        // Filter out the item with the specified ID from the data array
        const updatedData = data.filter(item => item.id !== id);

        // Set the updated data array
        setData(updatedData);
    };

    return (
        <div>
            <h1 className='m-8 flex justify-center'>CRUD Operation </h1>
            <hr />
            <form className='mt-8' onSubmit={handleFormSubmit}>
                <label className='block'>
                    Name:
                    <input
                        type="text"
                        className='border border-gray-300 p-2 rounded-md w-full mt-1'
                        value={name}
                        onChange={handleNameChange}
                    />
                </label>
                <button type="submit" className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md'>
                    Create
                </button>
            </form>
            <InfoTbl data={data} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
}
