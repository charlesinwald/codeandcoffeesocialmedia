import { useState } from "react";
import { BACKEND_URL } from "../const";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    fetch(`${BACKEND_URL}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        window.location.href = "/login";
      }
    });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Cropify</a>
      </div>
      <div className="flex-none">
        <button
          className="btn btn-square btn-ghost"
          data-dropdown-toggle="dropdown"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
        <div className={"dropdown z-10 absolute top-16 right-5 ease-in duration-300 " + (isOpen ? "" : "hidden")}>
          <ul>
            <li>
              <button onClick={() => logout()}>Log Out</button>
            </li>
          </ul>
        </div>
    </div>
  );
}
