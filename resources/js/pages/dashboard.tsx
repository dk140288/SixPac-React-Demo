import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

interface DashboardProps {
    totalUsers: number;
    totalProducts: number;
}

export default function Dashboard({ totalUsers, totalProducts }: DashboardProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="space-y-6 p-6">
                {/* Stats Cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <StatCard title="Total Users" value={totalUsers} />
                    <StatCard title="Total Products" value={totalProducts} />
                    <StatCard title="More Stats" value="Coming soon..." isPlaceholder />
                </div>

                {/* Placeholder for charts or details */}
                <div className="relative min-h-[300px] overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}

// Component for Stat Card
function StatCard({ title, value, isPlaceholder = false }: { title: string; value: number | string; isPlaceholder?: boolean }) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
            <p className={`mt-2 text-3xl font-semibold ${isPlaceholder ? 'text-gray-400 dark:text-gray-600' : 'text-gray-900 dark:text-white'}`}>
                {value}
            </p>
        </div>
    );
}
