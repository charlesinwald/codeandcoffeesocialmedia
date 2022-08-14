import { useState } from "react";

import { BACKEND_URL } from "../const";

export default function Sidebar() {
  return (
      <div className="sidebar bg-base-100 w-full">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Sidebar will go here</a>
        </div>
      </div>
  );
}
