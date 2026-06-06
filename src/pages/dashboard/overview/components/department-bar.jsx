function DepartmentBar({ label, value, tone }) {
  return (
    <li className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium text-foreground">{label}</span>
        <span className="text-muted-foreground">{value}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={`h-full rounded-full ${tone}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </li>
  );
}

export { DepartmentBar };
