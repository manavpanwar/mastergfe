"use client";

import Link from "next/link";
import { useGetMeQuery, apiSlice } from "@/store/apiSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function UserMenu() {
  const dispatch = useDispatch();
  const [token, setToken] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Sync token from localStorage
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  const { data: user } = useGetMeQuery(undefined, {
    skip: !token && isClient
  });

  if (!isClient) return null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(apiSlice.util.resetApiState());
    window.location.href = "/"; // Force a full reload to clear all states
  };

  if (user) {
    return (
      <>
        <li>
          <Link href="/profile" className="profile-link">
            <span style={{ marginRight: '8px' }}>👤</span>
            {user.name.split(' ')[0]}
          </Link>
        </li>
        <li>
          <button 
            onClick={handleLogout}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#ef4444', 
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            Logout
          </button>
        </li>
      </>
    );
  }

  return (
    <>
      <li><Link href="/login">Login</Link></li>
      <li><Link href="/register">Register</Link></li>
    </>
  );
}
