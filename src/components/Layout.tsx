import React from "react";

export default React.forwardRef(function Layout({ children }: any, ref: any) {
  return (
    <>
      <div ref={ref} className="p-auto">
        <main className="mx-auto">{children}</main>
      </div>
    </>
  );
});
