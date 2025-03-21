import CaseTracking from '../components/Dashboard/CaseTracking';
import CrimeStatistics from '../components/Dashboard/CrimeStatistics';

function DashboardPage() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <CaseTracking />
            <CrimeStatistics />
        </div>
    );
}

export default DashboardPage;