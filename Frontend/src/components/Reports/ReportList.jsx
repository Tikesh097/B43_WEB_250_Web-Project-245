import React from 'react';

const ReportList = ({ reports }) => {
    return (
        <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Submitted Reports</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Incident Type</th>
                        <th className="border px-4 py-2">Date</th>
                        <th className="border px-4 py-2">Status</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.length > 0 ? (
                        reports.map((report) => (
                            <tr key={report.id}>
                                <td className="border px-4 py-2">{report.incidentType}</td>
                                <td className="border px-4 py-2">{new Date(report.date).toLocaleDateString()}</td>
                                <td className="border px-4 py-2">{report.status}</td>
                                <td className="border px-4 py-2">
                                    <a href={`/report/${report.id}`} className="text-blue-500 hover:underline">View Details</a>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="border px-4 py-2 text-center">No reports found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ReportList;