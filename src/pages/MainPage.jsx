import React from 'react';
import { ProfileCard } from '../components/shared/ProfileCard';
import AuthModel from '../models/AuthModel';

const MainPage = () => {
    const userData = AuthModel.getCurrentUser();

    if (!userData) {
        return <div>User is not logged in</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center mb-12 space-y-1">
                    <h1 className="text-2xl font-medium text-gray-900">Welcome to</h1>
                    <h2 className="text-2xl font-bold text-[#6B4EFF]">Unstop</h2>
                </div>

                <div className="flex justify-center">
                    <ProfileCard
                        name={`${userData.firstName} ${userData.lastName}`}
                        email={userData.email}
                        gender={userData.gender}
                        imageUrl={userData.image}
                        onLogout={() => {
                            AuthModel.logout();
                            window.location.reload();
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
