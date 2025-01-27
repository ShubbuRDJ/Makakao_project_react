import { useState, useEffect } from 'react';

const useNetworkStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        // Handlers to update the status when online/offline events are triggered
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        // Add event listeners for 'online' and 'offline' events
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        // Clean up the event listeners on component unmount
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return isOnline;
};

export default useNetworkStatus;
