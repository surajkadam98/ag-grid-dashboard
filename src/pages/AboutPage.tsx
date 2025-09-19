export function AboutPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">About</h1>
        <p className="text-muted-foreground">
          Learn more about this employee dashboard application.
        </p>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-xl font-semibold mb-4 text-card-foreground">Employee Dashboard</h2>
        <p className="text-muted-foreground">
          This is a modern React-based employee dashboard built with AG Grid for data visualization and management.
          The application features a responsive design, dark/light theme support, and comprehensive data filtering and sorting capabilities.
        </p>
      </div>
    </div>
  );
}
