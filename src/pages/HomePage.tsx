import {  UserGroupIcon, ChartBarIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { EmployeeTable } from '../features/Home/EmployeeTable';
import type { Employee } from '../@types/employee';
import employeeData from '../@config/employees.json';

export function HomePage() {
  const employees: Employee[] = employeeData.employees;

  // Calculate dynamic stats
  const totalEmployees = employees.length;
  const activeEmployees = employees.filter(emp => emp.isActive).length;
  const totalProjects = employees.reduce((sum, emp) => sum + emp.projectsCompleted, 0);
  const departments = [...new Set(employees.map(emp => emp.department))].length;
  const avgPerformance = employees.reduce((sum, emp) => sum + emp.performanceRating, 0) / employees.length;

  // Calculate previous period for comparison (simulated)
  const prevTotalEmployees = Math.round(totalEmployees * 0.95); // Simulate 5% growth
  const prevTotalProjects = Math.round(totalProjects * 0.89); // Simulate 11% growth

  const employeeGrowth = ((totalEmployees - prevTotalEmployees) / prevTotalEmployees * 100).toFixed(1);
  const projectGrowth = ((totalProjects - prevTotalProjects) / prevTotalProjects * 100).toFixed(1);

  const stats = [
    {
      name: 'Total Employees',
      value: totalEmployees.toString(),
      icon: UserGroupIcon,
      change: `+${employeeGrowth}%`,
      changeType: 'positive' as const,
      subtitle: `${activeEmployees} active`,
    },
    {
      name: 'Total Projects',
      value: totalProjects.toString(),
      icon: ChartBarIcon,
      change: `+${projectGrowth}%`,
      changeType: 'positive' as const,
      subtitle: 'completed projects',
    },
    {
      name: 'Departments',
      value: departments.toString(),
      icon: FunnelIcon,
      change: `${avgPerformance.toFixed(1)} avg`,
      changeType: 'neutral' as const,
      subtitle: 'performance rating',
    },
  ];

  return (
    <div className="space-y-8">


      {/* Stats Section */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="relative overflow-hidden rounded-lg bg-white px-6 py-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <>
              <div className="flex items-center mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                  <stat.icon className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                </div>
                <h3 className="ml-3 text-sm font-medium text-gray-500">
                  {stat.name}
                </h3>
              </div>
              <div className="flex flex-col">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="flex items-center justify-between">
                  <div className={`text-sm font-medium ${
                    stat.changeType === 'positive'
                      ? 'text-green-600'
                      : 'text-indigo-600'
                  }`}>
                    {stat.change}
                  </div>
                  <div className="text-xs text-gray-400">
                    {stat.subtitle}
                  </div>
                </div>
              </div>
            </>
          </div>
        ))}
      </div>

      {/* Employee Table Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">All Employees</h2>
          <div className="text-sm text-gray-500">
            Showing all active and inactive employees
          </div>
        </div>
        <EmployeeTable />
      </div>
    </div>
  );
}
