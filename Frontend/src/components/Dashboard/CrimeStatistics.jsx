import { useEffect, useState } from 'react';
import { fetchCrimeStatistics } from '../../services/api'; // Assume you have this API function
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

function CrimeStatistics() {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getStatistics = async () => {
            try {
                const response = await fetchCrimeStatistics(); // Fetch statistics from your API
                setData(response.data); // Assuming response.data contains the statistics
            } catch (err) {
                setError('Failed to fetch crime statistics. Please try again later.');
            }
        };

        getStatistics();
    }, []);

    return (
        <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Crime Statistics</h2>
            {error && <p className="text-red-500">{error}</p>}
            <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="incidentType" />
                <YAxis />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
        </div>
    );
}

export default CrimeStatistics;