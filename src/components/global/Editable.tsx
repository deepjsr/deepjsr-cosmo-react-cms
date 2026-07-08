import type { ReactNode } from 'react';

/**
 * Local replacement for @cloudcannon/editable-regions' `Editable`.
 * This version of the package does not export a React `Editable` component,
 * so we mark regions with `data-cms-editable` ourselves.
 *
 * `display: contents` is used so the wrapper does not affect layout —
 * the child element remains the real grid/flex item.
 */
export function Editable({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      data-cms-editable={id}
      className={['contents', className].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  );
}
