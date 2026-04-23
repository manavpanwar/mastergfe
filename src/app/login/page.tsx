"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MotionWrapper from "@/components/MotionWrapper";
import { useLoginMutation } from "@/store/apiSlice";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const data = await login(formData).unwrap();

      // Store token (in a real app, use a more secure method or cookie)
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      router.push("/");
      window.location.href = "/"; // Force full reload to update nav bar state
    } catch (err: any) {
      setError(err?.data?.message || err.message || "Login failed");
    }
  };

  return (
    <main className="login-page">
      <section className="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '100px', paddingBottom: '50px' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <MotionWrapper direction="down">
            <div className="login-card glass" style={{ padding: '20px 48px 32px', borderRadius: '22px', textAlign: 'left' }}>
              <div style={{ textAlign: 'center', marginBottom: '0' }}>
                <Link href="/">
                  <img src="/images/whitelogo.png" alt="Master G" style={{ height: '250px', margin: '-40px auto -50px' }} />
                </Link>
                <h2 className="accent-text" style={{ fontSize: '32px' }}>Welcome Back</h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', marginTop: '0' }}>
                  Log in to access your dashboard
                </p>
              </div>

              {error && (
                <div style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  color: '#ef4444',
                  padding: '12px',
                  borderRadius: '12px',
                  marginBottom: '20px',
                  fontSize: '14px',
                  textAlign: 'center'
                }}>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--color-text-muted)' }}>Email Address</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    required
                    style={{
                      width: '100%',
                      background: 'var(--color-secondary)',
                      border: '1px solid var(--color-border)',
                      padding: '16px 20px',
                      borderRadius: '14px',
                      color: 'white',
                      fontSize: '15px',
                      outline: 'none',
                    }}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--color-text-muted)' }}>Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    required
                    style={{
                      width: '100%',
                      background: 'var(--color-secondary)',
                      border: '1px solid var(--color-border)',
                      padding: '16px 20px',
                      borderRadius: '14px',
                      color: 'white',
                      fontSize: '15px',
                      outline: 'none',
                    }}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '4px', padding: '12px' }}
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login to Master G"}
                </button>
              </form>

              <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '14px', color: 'var(--color-text-muted)' }}>
                Don't have an account? <Link href="/register" style={{ color: 'var(--color-accent)', fontWeight: '600' }}>Contact Admin</Link>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </main>
  );
}
