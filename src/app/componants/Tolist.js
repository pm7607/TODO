'use client'
import React, { useState } from 'react';

export default function ToList() {
    const [inputValue, setInputValue] = useState('');
    const [submittedValues, setSubmittedValues] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const manageInput = (e) => {
        setInputValue(e.target.value);
    };

    const submitManage = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            if (isEditing) {
                const updatedValues = [...submittedValues];
                updatedValues[editIndex] = inputValue;
                setSubmittedValues(updatedValues);
                setIsEditing(false);
                setEditIndex(null);
            } else {
                setSubmittedValues((prevValues) => [...prevValues, inputValue]);
            }
            setInputValue('');
        }
    };

    const handleEdit = (index) => {
        setInputValue(submittedValues[index]);
        setIsEditing(true);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updatedValues = submittedValues.filter((_, i) => i !== index);
        setSubmittedValues(updatedValues);
    };

    return (
        <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-center h-screen bg-cover'>
            <div className='flex flex-wrap h-full flex-col content-center justify-center w-100'>
                <div className='p-10 rounded-xl bg-bgDark w-full max-w-[600px] flex flex-col gap-4'>
                  <p className='text-center font-bold text-2xl'>
                    TODO
                  </p>
                    <form onSubmit={submitManage}>
                        <input
                            value={inputValue}
                            onChange={manageInput}
                            placeholder='Enter value here'
                            className='p-5 w-full text-black rounded-3xl'
                        />
                        <button type='submit' className='bg-indigo-500 rounded-3xl p-5 mt-4'>
                            {isEditing ? 'Update' : 'Add Item'}
                        </button>
                    </form>
                    <div className='flex gap-4 mt-4'>
                        {submittedValues.length > 0 && (
                            <div>
                                <h2 className='text-3xl font-bold mb-4'>Submitted Values:</h2>
                                <ul className='list-disc pl-5'>
                                    {submittedValues.map((value, index) => (
                                        <li key={index} className='mb-2 flex justify-between items-center'>
                                            {value}
                                            <div className='flex gap-2'>
                                                <button
                                                    onClick={() => handleEdit(index)}
                                                    className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg'
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(index)}
                                                    className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg'
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </li>   
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
