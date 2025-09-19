import { useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import type { ColDef, GridReadyEvent } from 'ag-grid-community';
import type { Employee } from '../../@types/employee';
import employeeData from '../../@config/employees.json';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

ModuleRegistry.registerModules([AllCommunityModule]);

export function EmployeeTable() {
  const [rowData] = useState<Employee[]>(employeeData.employees);

  const columnDefs: ColDef<Employee>[] = useMemo(() => [
    {
      field: 'id',
      headerName: 'ID',
      width: 80,
      checkboxSelection: true,
      headerCheckboxSelection: true,
      pinned: 'left',
    },
    {
      field: 'firstName',
      headerName: 'First Name',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      width: 140,
      pinned: 'left',
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      width: 140,
      pinned: 'left',
    },
    {
      field: 'email',
      headerName: 'Email',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      width: 220,
      cellRenderer: (params: { value: string }) => (
        <a
          href={`mailto:${params.value}`}
          className="text-indigo-600 hover:text-indigo-800 underline"
        >
          {params.value}
        </a>
      ),
    },
    {
      field: 'department',
      headerName: 'Department',
      filter: 'agSetColumnFilter',
      floatingFilter: true,
      width: 140,
      cellRenderer: (params: { value: string }) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {params.value}
        </span>
      ),
    },
    {
      field: 'position',
      headerName: 'Position',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      width: 180,
      cellRenderer: (params: { value: string }) => (
        <span className="font-medium text-gray-900">{params.value}</span>
      ),
    },
    {
      field: 'salary',
      headerName: 'Salary',
      filter: 'agNumberColumnFilter',
      floatingFilter: true,
      width: 120,
      valueFormatter: (params) => `$${params.value?.toLocaleString()}`,
      cellRenderer: (params: { value: number }) => (
        <span className="font-mono font-semibold text-green-700">
          ${params.value?.toLocaleString()}
        </span>
      ),
    },
    {
      field: 'hireDate',
      headerName: 'Hire Date',
      filter: 'agDateColumnFilter',
      floatingFilter: true,
      width: 120,
      valueFormatter: (params) => {
        if (!params.value) return '';
        return new Date(params.value).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
      },
    },
    {
      field: 'age',
      headerName: 'Age',
      filter: 'agNumberColumnFilter',
      floatingFilter: true,
      width: 80,
      cellRenderer: (params: { value: number }) => (
        <span className="text-center w-full block">{params.value}</span>
      ),
    },
    {
      field: 'location',
      headerName: 'Location',
      filter: 'agSetColumnFilter',
      floatingFilter: true,
      width: 120,
      cellRenderer: (params: { value: string }) => (
        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
          📍 {params.value}
        </span>
      ),
    },
    {
      field: 'performanceRating',
      headerName: 'Performance',
      filter: 'agNumberColumnFilter',
      floatingFilter: true,
      width: 130,
      valueFormatter: (params) => params.value?.toFixed(1),
      cellRenderer: (params: { value: number }) => {
        const rating = params.value;
        let colorClass = 'bg-gray-100 text-gray-800';

        if (rating >= 4.5) colorClass = 'bg-green-100 text-green-800';
        else if (rating >= 4.0) colorClass = 'bg-blue-100 text-blue-800';
        else if (rating >= 3.5) colorClass = 'bg-yellow-100 text-yellow-800';
        else colorClass = 'bg-red-100 text-red-800';

        return (
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${colorClass}`}>
              ⭐ {rating?.toFixed(1)}
            </span>
          </div>
        );
      },
    },
    {
      field: 'projectsCompleted',
      headerName: 'Projects',
      filter: 'agNumberColumnFilter',
      floatingFilter: true,
      width: 100,
      cellRenderer: (params: { value: number }) => (
        <div className="flex items-center justify-center">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold">
            {params.value}
          </span>
        </div>
      ),
    },
    {
      field: 'isActive',
      headerName: 'Status',
      filter: 'agSetColumnFilter',
      floatingFilter: true,
      width: 100,
      cellRenderer: (params: { value: boolean }) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          params.value
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}>
          <span className={`w-2 h-2 rounded-full mr-1.5 ${
            params.value ? 'bg-green-400' : 'bg-red-400'
          }`}></span>
          {params.value ? 'Active' : 'Inactive'}
        </span>
      ),
    },
    {
      field: 'skills',
      headerName: 'Skills',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      width: 250,
      cellRenderer: (params: { value: string[] }) => (
        <div className="flex flex-wrap gap-1 py-1">
          {params.value?.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800"
            >
              {skill}
            </span>
          ))}
          {params.value?.length > 3 && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">
              +{params.value.length - 3}
            </span>
          )}
        </div>
      ),
      tooltipValueGetter: (params) => params.value?.join(', '),
    },
    {
      field: 'manager',
      headerName: 'Manager',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      width: 150,
      valueFormatter: (params) => params.value || 'N/A',
      cellRenderer: (params: { value: string }) => (
        <span className={params.value ? 'text-gray-900' : 'text-gray-400 italic'}>
          {params.value || 'N/A'}
        </span>
      ),
    },
  ], []);

  const defaultColDef = useMemo(() => ({
    sortable: true,
    resizable: true,
    filter: true,
    floatingFilter: true,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: '8px',
      paddingBottom: '8px'
    },
  }), []);

  const onGridReady = (params: GridReadyEvent) => {
    params.api.sizeColumnsToFit();
  };

  const gridOptions = {
    headerHeight: 56,
    rowHeight: 60,
    animateRows: true,
    enableRangeSelection: true,
    enableCharts: true,
    pagination: true,
    paginationPageSize: 20,
    paginationPageSizeSelector: [10, 20, 50, 100],
    suppressRowClickSelection: true,
    rowSelection: 'multiple' as const,
    sideBar: {
      toolPanels: [
        {
          id: 'columns',
          labelDefault: 'Columns',
          labelKey: 'columns',
          iconKey: 'columns',
          toolPanel: 'agColumnsToolPanel',
          toolPanelParams: {
            suppressRowGroups: true,
            suppressValues: true,
            suppressPivots: true,
            suppressPivotMode: true,
            suppressColumnFilter: false,
            suppressColumnSelectAll: false,
            suppressColumnExpandAll: false,
          },
        },
        {
          id: 'filters',
          labelDefault: 'Filters',
          labelKey: 'filters',
          iconKey: 'filter',
          toolPanel: 'agFiltersToolPanel',
        },
      ],
      defaultToolPanel: 'columns',
      hiddenByDefault: false,
    },
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <div className="ag-theme-quartz h-[700px] w-full">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          {...gridOptions}
        />
      </div>
    </div>
  );
}
