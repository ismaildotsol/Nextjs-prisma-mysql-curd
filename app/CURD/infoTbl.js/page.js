import Buttons from '@/app/Components/buttons';
import React from 'react';

export default function InfoTbl({ data }) {
    return (
        <div className='mt-8'>
            <h2 className='text-xl font-semibold mb-4'>Information Table</h2>
            <table className='table-auto w-full'>
                <thead>
                    <tr>
                        <th className='border px-4 py-2'>ID</th>
                        <th className='border px-4 py-2'>Name</th>
                        <th className='border px-4 py-2'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td className='border px-4 py-2'>{item.id}</td>
                            <td className='border px-4 py-2'>{item.name}</td>
                            <td className='border px-4 py-2'>
                                <Buttons data={item}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}