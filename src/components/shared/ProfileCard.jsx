import React from 'react';
import PropTypes from 'prop-types'; 
import {Button} from '../shared/Button'; 

const ProfileCard = ({ name, email, gender, imageUrl, onLogout }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 w-[280px] flex flex-col items-center space-y-3">
            <div className="relative w-20 h-20">
                <img
                    src={imageUrl}
                    alt={name}
                    layout="fill"
                    className="rounded-full object-cover"
                />
            </div>
            <div className="text-center space-y-1">
                <h2 className="font-medium text-gray-900">{name}</h2>
                <p className="text-sm text-gray-500">{email}</p>
                <p className="text-sm text-gray-500 capitalize">{gender}</p>
            </div>
            <Button
                onClick={onLogout}
                className="w-24 bg-[#6B4EFF] hover:bg-[#6B4EFF]/90 text-white"
            >
                Logout
            </Button>
        </div>
    );
};

ProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    onLogout: PropTypes.func.isRequired,
};

export  {ProfileCard};
