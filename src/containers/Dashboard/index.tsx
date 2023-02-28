import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        navigate('/sign_in');
    }, []);

    return null;
};