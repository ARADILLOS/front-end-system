import React from 'react';
import './admin.css';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
	const navigate = useNavigate?.() || (()=>{});

	const stats = [
		{ id: 1, label: 'Total Revenue', value: '127.8K', icon: 'money' },
		{ id: 2, label: 'Total Users', value: '536', icon: 'users' },
		{ id: 3, label: 'Active Users', value: '426', icon: 'active' },
	];

	const statusItems = [
		{ id: 1, label: 'Business Profile', value: 'Active', valueClass: 'status-active' },
		{ id: 2, label: 'Engagement Level', value: 'High' },
		{ id: 3, label: 'Last Update', value: '3 days ago' },
		{ id: 4, label: 'Location Accuracy', value: 'Verified', valueClass: 'status-active' },
		{ id: 5, label: 'Pending Tasks', value: '2 tasks' },
	];

	return (
		<div className="admin-page">
			<header className="admin-header">
				<div className="admin-header-inner">
					<div className="brand">
						<div className="brand-icon">🏠</div>
						<div className="brand-title">Admin Panel</div>
					</div>

					<nav className="admin-nav">
						<a className="nav-link">Home</a>
						<a className="nav-link active">Overview</a>
						<a className="nav-link">Users</a>
					</nav>
				</div>
			</header>

			<main className="admin-main">
				<section className="welcome">
					<h1>Welcome Back, Admin</h1>
					<p className="subtitle">Monitor your people and metrics</p>
				</section>

				<section className="metrics">
					<div className="metrics-row">
						{stats.map(s => (
							<div key={s.id} className="metric-card">
								<div className="metric-left">
									<div className="metric-label">{s.label}</div>
									<div className="metric-value">{s.value}</div>
								</div>
								<div className="metric-icon">
									{s.icon === 'money' && (
										<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect x="0" y="0" width="24" height="24" rx="6" fill="#dbe9ee"/>
											<path d="M12 7v10M9 9h6a1.5 1.5 0 010 3h-6" stroke="#2f5160" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									)}
									{s.icon === 'users' && (
										<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect x="0" y="0" width="24" height="24" rx="6" fill="#dbe9ee"/>
											<path d="M16 11a3 3 0 10-6 0M6 19a6 6 0 0112 0" stroke="#2f5160" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									)}
									{s.icon === 'active' && (
										<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect x="0" y="0" width="24" height="24" rx="6" fill="#dbe9ee"/>
											<path d="M8 14s1.5-2 4-2 4 2 4 2" stroke="#2f5160" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
											<circle cx="18" cy="6" r="2" fill="#60b36b"/>
										</svg>
									)}
								</div>
							</div>
						))}
					</div>

					<div className="status-card">
						<h3>Status Summary</h3>
						<ul className="status-list">
							{statusItems.map(it => (
								<li key={it.id} className="status-item">
									<div className="status-left">
										{it.id === 1 && <span className="status-dot" />}
										{it.id === 2 && (
											<svg className="status-icon" viewBox="0 0 24 24" width="18" height="18"><path d="M3 12h3l3-8 4 16 3-10h4" stroke="#2f5160" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
										)}
										{it.id === 3 && (
											<svg className="status-icon" viewBox="0 0 24 24" width="18" height="18"><path d="M12 7v5l3 3" stroke="#2f5160" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
										)}
										{it.id === 4 && (
											<svg className="status-icon" viewBox="0 0 24 24" width="18" height="18"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16 6.5 20l2-7L3 9h7z" stroke="#2f5160" strokeWidth="0.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
										)}
										{it.id === 5 && (
											<svg className="status-icon" viewBox="0 0 24 24" width="18" height="18"><path d="M3 6h18M7 6v12a2 2 0 002 2h6a2 2 0 002-2V6" stroke="#2f5160" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
										)}
										<span className="status-label">{it.label}</span>
									</div>
									<div className={`status-value ${it.valueClass || ''}`}>{it.value}</div>
								</li>
							))}
						</ul>
					</div>
				</section>
			</main>
		</div>
	);
}
