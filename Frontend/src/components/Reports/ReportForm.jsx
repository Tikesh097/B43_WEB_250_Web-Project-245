import { useState } from 'react';
import { submitReport } from '../../services/api';

const ReportForm = () => {
    const [incidentType, setIncidentType] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [evidence, setEvidence] = useState(null);
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('incidentType', incidentType);
        formData.append('date', date);
        formData.append('time', time);
        formData.append('location', location);
        formData.append('isAnonymous', isAnonymous);
        if (evidence) {
            formData.append('evidence', evidence);
        }

        try {
            await submitReport(formData);
            setSuccess('Report submitted successfully!');
            setError('');
            // Reset form fields
            setIncidentType('');
            setDate('');
            setTime('');
            setLocation('');
            setEvidence(null);
            setIsAnonymous(false);
        } catch (err) {
            setError('Failed to submit report. Please try again.');
            setSuccess('');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Report a Crime</h2>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700">Incident Type</label>
                    <input
                        type="text"
                        value={incidentType}
                        onChange={(e) => setIncidentType(e.target.value)}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Time</label>
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={isAnonymous}
                            onChange={() => setIsAnonymous(!isAnonymous)}
                            className="mr-2"
                        />
                        Report Anonymously
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Evidence (optional)</label>
                    <input
                        type="file"
                        onChange={(e) => setEvidence(e.target.files[0])}
                        className="border rounded w-full py-2 px-3"
                    />
                </div>
                <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded">
                    Submit Report
                </button>
            </form>
        </div>
    );
}

export default ReportForm;