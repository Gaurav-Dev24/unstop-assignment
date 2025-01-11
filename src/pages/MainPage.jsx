import React from 'react';
import { ProfileCard } from '../components/shared/ProfileCard'; // Assuming ProfileCard is in the same path

const MainPage = () => {
    const handleLogout = () => {
        // Add logout logic here
        console.log('Logging out...');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center mb-12 space-y-1">
                    <h1 className="text-2xl font-medium text-gray-900">Welcome to</h1>
                    <h2 className="text-2xl font-bold text-[#6B4EFF]">Unstop</h2>
                </div>

                <div className="flex justify-center">
                    <ProfileCard
                        name="Michael Dam"
                        email="michael@gmail.com"
                        gender="female"
                        imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20134314-p47X0Y0Dwibh7TWEvDcI1oj4z2Cr23.png"
                        onLogout={handleLogout}
                    />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
