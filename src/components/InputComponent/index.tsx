import React from 'react';

interface InputProps {
    value: string;
    handleChangeValue: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
    value,
    handleChangeValue,
}: InputProps) => {
    const handleChange = (e: any) => {
        handleChangeValue(e.target.value);
    };

    return (
        <input 
            value={value} 
            onChange={handleChange}
        />
    );
};