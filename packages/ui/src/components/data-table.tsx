import type { ReactNode } from "react";

export function DataTable({
  caption,
  columns,
  emptyMessage = "No rows available.",
  rowKeys,
  rows,
}: {
  caption?: string;
  columns: string[];
  emptyMessage?: string;
  rowKeys?: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface shadow-[var(--shadow-xs)]">
      <table className="min-w-full divide-y divide-border text-left">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead className="bg-surface-muted">
          <tr>
            {columns.map((column) => (
              <th
                className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                key={column}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.length === 0 ? (
            <tr>
              <td
                className="px-4 py-8 text-sm text-muted-foreground"
                colSpan={columns.length}
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            rows.map((row, rowIndex) => {
              const rowKey =
                rowKeys?.[rowIndex] ??
                `${caption ?? "table"}-${row
                  .map((cell) =>
                    typeof cell === "string" || typeof cell === "number"
                      ? String(cell)
                      : typeof cell,
                  )
                  .join("-")}`;

              return (
                <tr
                  className="transition hover:bg-[color:color-mix(in_srgb,var(--color-primary)_4%,white)]"
                  key={rowKey}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      className="px-4 py-4 align-top text-sm text-foreground"
                      key={`${rowKey}-${columns[cellIndex] ?? `column-${cellIndex}`}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
