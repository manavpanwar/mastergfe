"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import MotionWrapper from "@/components/MotionWrapper";
import { useGetMeQuery, useGetMyRequestsQuery, useGetAllRequestsQuery, useUpdateRequestStatusMutation, apiSlice } from "@/store/apiSlice";

function LeadGroup({ service, leads }: { service: string, leads: any[] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [updateStatus] = useUpdateRequestStatusMutation();

  const handleStatusUpdate = async (id: string, status: string) => {
    try {
      await updateStatus({ id, status }).unwrap();
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  return (
    <div className="lead-group glass" style={{ padding: '0', overflow: 'hidden', borderRadius: '16px', border: isExpanded ? '1px solid rgba(239, 68, 68, 0.2)' : '1px solid var(--color-border)' }}>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ 
          width: '100%', 
          padding: '16px 24px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          background: isExpanded ? 'rgba(239, 68, 68, 0.05)' : 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '20px' }}>{isExpanded ? '📂' : '📁'}</span>
          <h3 style={{ textTransform: 'uppercase', fontSize: '14px', letterSpacing: '0.1em', color: isExpanded ? '#ef4444' : 'var(--color-text)', margin: 0 }}>
            {service} <span style={{ marginLeft: '8px', color: 'var(--color-text-muted)', fontWeight: '400', textTransform: 'none' }}>({leads.length} Leads)</span>
          </h3>
        </div>
        <span style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', color: 'var(--color-text-muted)', fontSize: '12px' }}>{isExpanded ? '▲' : '▼'}</span>
      </button>
      
      {isExpanded && (
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', background: 'rgba(0,0,0,0.1)' }}>
          {leads.map((lead: any) => (
            <div key={lead._id} className="glass" style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#ef4444' }}>
                  {lead.user ? lead.user.name : 'Guest User'} 
                  <span style={{ fontWeight: '400', color: 'var(--color-text-muted)', marginLeft: '8px' }}>({lead.user ? lead.user.email : 'No Email'})</span>
                </div>
                <span className="badge" style={{ 
                  fontSize: '10px', 
                  padding: '2px 8px', 
                  background: lead.status === 'contacted' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.1)', 
                  color: lead.status === 'contacted' ? '#22c55e' : '#ef4444',
                  borderRadius: '99px',
                  fontWeight: '700',
                  textTransform: 'uppercase'
                }}>
                  {lead.status}
                </span>
              </div>
              
              <div style={{ 
                fontSize: '12px', 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
                gap: '8px',
                color: 'var(--color-text-muted)',
                marginBottom: '12px'
              }}>
                {Object.entries(lead.formData).map(([key, val]: [string, any]) => (
                  <div key={key}>
                    <strong style={{ color: 'var(--color-text)', textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1')}:</strong> {val || 'N/A'}
                  </div>
                ))}
              </div>
              
              <div style={{ paddingTop: '10px', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <div style={{ fontSize: '10px', color: 'var(--color-text-subtle)' }}>
                   {new Date(lead.createdAt).toLocaleDateString()} at {new Date(lead.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                 </div>
                 <div style={{ display: 'flex', gap: '8px' }}>
                    {lead.status !== 'contacted' && (
                      <button 
                        onClick={() => handleStatusUpdate(lead._id, 'contacted')}
                        style={{ 
                          background: 'rgba(34, 197, 94, 0.1)', 
                          border: '1px solid rgba(34, 197, 94, 0.3)', 
                          color: '#22c55e', 
                          fontSize: '11px', 
                          padding: '6px 12px', 
                          borderRadius: '8px', 
                          cursor: 'pointer',
                          fontWeight: '600',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        ✅ Mark Contacted
                      </button>
                    )}
                    {lead.status === 'contacted' && (
                       <div style={{ color: '#22c55e', fontSize: '11px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>
                         ✨ Contacted
                       </div>
                    )}
                    {lead.status !== 'archived' ? (
                      <button 
                        onClick={() => handleStatusUpdate(lead._id, 'archived')}
                        style={{ 
                          background: 'rgba(239, 68, 68, 0.1)', 
                          border: '1px solid rgba(239, 68, 68, 0.3)', 
                          color: '#ef4444', 
                          fontSize: '11px', 
                          padding: '6px 12px', 
                          borderRadius: '8px', 
                          cursor: 'pointer',
                          fontWeight: '600'
                        }}
                      >
                        📦 Archive
                      </button>
                    ) : (
                      <button 
                        onClick={() => handleStatusUpdate(lead._id, 'pending')}
                        style={{ 
                          background: 'rgba(255, 255, 255, 0.1)', 
                          border: '1px solid var(--color-border)', 
                          color: 'white', 
                          fontSize: '11px', 
                          padding: '6px 12px', 
                          borderRadius: '8px', 
                          cursor: 'pointer'
                        }}
                      >
                        🔄 Restore
                      </button>
                    )}
                 </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProfilePage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: user, isLoading: userLoading, isError } = useGetMeQuery(undefined);
  const { data: requests, isLoading: requestsLoading } = useGetMyRequestsQuery(undefined);
  const { data: allLeads, isLoading: leadsLoading } = useGetAllRequestsQuery(undefined, {
    skip: user?.role !== 'admin' && user?.role !== 'owner'
  });
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    if (isError) {
      localStorage.removeItem("token");
      router.push("/login");
    }
  }, [isError, router]);

  if (userLoading || requestsLoading || (activeTab === 'leads' && leadsLoading)) return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="accent-text" style={{ fontSize: '24px' }}>Loading Dashboard...</div>
    </div>
  );

  if (isError) return null;

  const isAdmin = user?.role === 'admin' || user?.role === 'owner';

  return (
    <main className="profile-page" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div className="container">
        <MotionWrapper direction="up">
          <div className="profile-header" style={{ marginBottom: '40px' }}>
            <h1 className="accent-text" style={{ fontSize: '48px', marginBottom: '8px' }}>User Dashboard</h1>
            <p style={{ color: 'var(--color-text-muted)' }}>Manage your account and view your consultancy requests.</p>
          </div>

          <div className="profile-grid" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px' }}>
            {/* Sidebar */}
            <aside className="glass" style={{ padding: '24px', borderRadius: '24px', height: 'fit-content' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button 
                  onClick={() => setActiveTab("profile")}
                  style={{
                    textAlign: 'left',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: activeTab === "profile" ? 'var(--color-accent-dim)' : 'transparent',
                    color: activeTab === "profile" ? 'var(--color-accent)' : 'var(--color-text-muted)',
                    border: activeTab === "profile" ? '1px solid var(--color-border-gold)' : '1px solid transparent',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                >
                  👤 My Profile
                </button>
                {!isAdmin && (
                  <button 
                    onClick={() => setActiveTab("requests")}
                    style={{
                      textAlign: 'left',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: activeTab === "requests" ? 'var(--color-accent-dim)' : 'transparent',
                      color: activeTab === "requests" ? 'var(--color-accent)' : 'var(--color-text-muted)',
                      border: activeTab === "requests" ? '1px solid var(--color-border-gold)' : '1px solid transparent',
                      cursor: 'pointer',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    📝 My Requests
                  </button>
                )}

                {isAdmin && (
                  <>
                    <button 
                      onClick={() => setActiveTab("leads")}
                      style={{
                        textAlign: 'left',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        background: activeTab === "leads" ? 'rgba(239, 68, 68, 0.1)' : 'transparent',
                        color: activeTab === "leads" ? '#ef4444' : 'var(--color-text-muted)',
                        border: activeTab === "leads" ? '1px solid rgba(239, 68, 68, 0.3)' : '1px solid transparent',
                        cursor: 'pointer',
                        fontWeight: '600',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      🚀 Business Leads
                    </button>
                    <button 
                      onClick={() => setActiveTab("archive")}
                      style={{
                        textAlign: 'left',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        background: activeTab === "archive" ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                        color: activeTab === "archive" ? 'white' : 'var(--color-text-muted)',
                        border: activeTab === "archive" ? '1px solid var(--color-border)' : '1px solid transparent',
                        cursor: 'pointer',
                        fontWeight: '600',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      📦 Lead Archive
                    </button>
                  </>
                )}

                <hr style={{ border: '0', borderTop: '1px solid var(--color-border)', margin: '16px 0' }} />
                <button 
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    dispatch(apiSlice.util.resetApiState());
                    router.push("/login");
                  }}
                  style={{
                    textAlign: 'left',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'transparent',
                    color: '#ef4444',
                    border: '1px solid transparent',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                >
                  🚪 Logout
                </button>
              </div>
            </aside>

            {/* Content Area */}
            <section className="glass" style={{ padding: '40px', borderRadius: '24px' }}>
              {activeTab === "profile" && (
                <div className="tab-content">
                  <h2 style={{ marginBottom: '24px' }}>Profile Details</h2>
                  <div style={{ display: 'grid', gap: '24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '13px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Full Name</label>
                      <div style={{ fontSize: '18px', fontWeight: '600' }}>{user?.name}</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '13px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Address</label>
                      <div style={{ fontSize: '18px', fontWeight: '600' }}>{user?.email}</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '13px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>User Role</label>
                      <div>
                        <span className="badge" style={{ 
                          background: user?.role === 'admin' ? 'rgba(239, 68, 68, 0.1)' : 
                                      user?.role === 'owner' ? 'rgba(168, 85, 247, 0.1)' :
                                      user?.role === 'viewer' ? 'rgba(59, 130, 246, 0.1)' :
                                      'rgba(34, 197, 94, 0.1)', 
                          color: user?.role === 'admin' ? '#ef4444' : 
                                 user?.role === 'owner' ? '#a855f7' :
                                 user?.role === 'viewer' ? '#3b82f6' :
                                 '#22c55e', 
                          borderColor: user?.role === 'admin' ? 'rgba(239, 68, 68, 0.2)' : 
                                       user?.role === 'owner' ? 'rgba(168, 85, 247, 0.2)' :
                                       user?.role === 'viewer' ? 'rgba(59, 130, 246, 0.2)' :
                                       'rgba(34, 197, 94, 0.2)',
                          textTransform: 'capitalize'
                        }}>
                          {user?.role}
                        </span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '13px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Account Status</label>
                      <div>
                        <span className="badge" style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', borderColor: 'rgba(34, 197, 94, 0.2)' }}>
                          Verified
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "requests" && !isAdmin && (
                <div className="tab-content">
                  <h2 style={{ marginBottom: '24px' }}>My Consultancy Requests</h2>
                  {requests && requests.length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {requests.map((req: any) => (
                        <div key={req._id} className="glass" style={{ padding: '20px', borderRadius: '16px', background: 'rgba(255,255,255,0.02)' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                            <h4 style={{ textTransform: 'capitalize', color: 'var(--color-accent)' }}>{req.service} Inquiry</h4>
                            <span className="badge" style={{ fontSize: '10px' }}>{req.status}</span>
                          </div>
                          <div style={{ fontSize: '14px', color: 'var(--color-text-muted)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                            {Object.entries(req.formData).map(([key, val]: [string, any]) => (
                              <div key={key}>
                                <strong style={{ textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1')}:</strong> {val}
                              </div>
                            ))}
                          </div>
                          <div style={{ marginTop: '12px', fontSize: '11px', color: 'var(--color-text-subtle)', textAlign: 'right' }}>
                            Submitted on {new Date(req.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ padding: '40px', textAlign: 'center', background: 'var(--color-secondary)', borderRadius: '16px', border: '1px dashed var(--color-border)' }}>
                      <div style={{ fontSize: '48px', marginBottom: '16px' }}>📭</div>
                      <h3>No Active Requests</h3>
                      <p style={{ color: 'var(--color-text-muted)', marginTop: '8px' }}>Explore our services to get started.</p>
                      <button onClick={() => router.push("/#services")} className="btn btn-primary" style={{ marginTop: '24px' }}>Browse Services</button>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "leads" && isAdmin && (
                <div className="tab-content">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                    <div>
                      <h2 style={{ fontSize: '32px' }}>Global Business Leads</h2>
                      <p style={{ color: 'var(--color-text-muted)', marginTop: '4px' }}>Real-time inquiries across all service verticals.</p>
                    </div>
                    <span className="badge" style={{ background: '#ef4444', color: 'white', border: 'none', padding: '8px 16px' }}>
                      {allLeads?.filter((l: any) => l.status !== 'archived').length || 0} Active Leads
                    </span>
                  </div>

                  {allLeads && allLeads.filter((l: any) => l.status !== 'archived').length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                      {Object.entries(
                        allLeads.filter((l: any) => l.status !== 'archived').reduce((acc: any, lead: any) => {
                          const svc = lead.service || "Uncategorized";
                          if (!acc[svc]) acc[svc] = [];
                          acc[svc].push(lead);
                          return acc;
                        }, {})
                      ).map(([service, leads]: [string, any]) => (
                        <LeadGroup key={service} service={service} leads={leads} />
                      ))}
                    </div>
                  ) : (
                    <div style={{ padding: '40px', textAlign: 'center', background: 'var(--color-secondary)', borderRadius: '16px' }}>
                      <div style={{ fontSize: '48px', marginBottom: '16px' }}>📉</div>
                      <h3>No Active Leads</h3>
                      <p style={{ color: 'var(--color-text-muted)', marginTop: '8px' }}>All inquiries are either completed or archived.</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "archive" && isAdmin && (
                <div className="tab-content">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                    <div>
                      <h2 style={{ fontSize: '32px' }}>Lead Archive</h2>
                      <p style={{ color: 'var(--color-text-muted)', marginTop: '4px' }}>Historical data and completed inquiries.</p>
                    </div>
                    <span className="badge" style={{ background: 'var(--color-text-subtle)', color: 'white', border: 'none', padding: '8px 16px' }}>
                      {allLeads?.filter((l: any) => l.status === 'archived').length || 0} Archived
                    </span>
                  </div>

                  {allLeads && allLeads.filter((l: any) => l.status === 'archived').length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                      {Object.entries(
                        allLeads.filter((l: any) => l.status === 'archived').reduce((acc: any, lead: any) => {
                          const svc = lead.service || "Uncategorized";
                          if (!acc[svc]) acc[svc] = [];
                          acc[svc].push(lead);
                          return acc;
                        }, {})
                      ).map(([service, leads]: [string, any]) => (
                        <LeadGroup key={service} service={service} leads={leads} />
                      ))}
                    </div>
                  ) : (
                    <div style={{ padding: '40px', textAlign: 'center', background: 'var(--color-secondary)', borderRadius: '16px' }}>
                      <div style={{ fontSize: '48px', marginBottom: '16px' }}>📦</div>
                      <h3>Archive is Empty</h3>
                      <p style={{ color: 'var(--color-text-muted)', marginTop: '8px' }}>Old leads will appear here once archived.</p>
                    </div>
                  )}
                </div>
              )}
            </section>
          </div>
        </MotionWrapper>
      </div>
    </main>
  );
}
