// =============================================
// auth.js — Token & user management utilities
// =============================================

const API_BASE = "http://localhost:3000/api";

function saveToken(token) {
  localStorage.setItem("token", token);
}

function getToken() {
  return localStorage.getItem("token");
}

function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function getUser() {
  const token = getToken();
  if (!token) return null;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return { name: payload.name, role: payload.role, userId: payload.userId };
  } catch (e) {
    return null;
  }
}
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("userId");
  window.location.href = "login.html";
}

// Redirect to login if no token
function requireAuth() {
  if (!getToken()) {
    window.location.href = "login.html";
    return false;
  }
  return true;
}

// Redirect to login if no token OR wrong role
function requireRole(...roles) {
  if (!getToken()) {
    window.location.href = "login.html";
    return false;
  }
  const user = getUser();
  if (!user || !roles.includes(user.role)) {
    window.location.href = "denied.html";
    return false;
  }
  return true;
}

// Populate sidebar user info
function populateSidebar() {
  const user = getUser();
  if (!user) return;

  const nameEl = document.getElementById("sidebar-name");
  const roleEl = document.getElementById("sidebar-role");
  const avatarEl = document.getElementById("sidebar-avatar");
  const badgeEl = document.getElementById("sidebar-badge");

  if (nameEl) nameEl.textContent = user.name || "User";
  if (roleEl) roleEl.textContent = user.role;
  if (avatarEl) avatarEl.textContent = (user.name || "U")[0].toUpperCase();

  if (badgeEl) {
    const cls = { admin: "badge-admin", manager: "badge-manager", user: "badge-user" };
    badgeEl.className = "badge " + (cls[user.role] || "badge-user");
    badgeEl.textContent = user.role;
  }
}

// Generic API call with auth header
async function apiCall(endpoint, method = "GET", body = null) {
  const headers = { "Content-Type": "application/json" };
  const token = getToken();
  if (token) headers["Authorization"] = "Bearer " + token;

  const opts = { method, headers };
  if (body) opts.body = JSON.stringify(body);

  const res = await fetch(API_BASE + endpoint, opts);
  const data = await res.json();
  return { ok: res.ok, status: res.status, data };
}

// Show / hide alert
function showAlert(id, message, type = "error") {
  const el = document.getElementById(id);
  if (!el) return;
  el.className = `alert alert-${type} show`;
  el.innerHTML = `<span>${type === "error" ? "⚠️" : type === "success" ? "✅" : "ℹ️"}</span> ${message}`;
}

function hideAlert(id) {
  const el = document.getElementById(id);
  if (el) el.className = "alert";
}

// Button loading state
function setLoading(btnId, loading) {
  const btn = document.getElementById(btnId);
  if (!btn) return;
  btn.disabled = loading;
  if (loading) {
    btn.classList.add("loading");
    btn.dataset.origText = btn.textContent;
    btn.textContent = "Please wait...";
    btn.classList.add("loading");
  } else {
    btn.classList.remove("loading");
    btn.textContent = btn.dataset.origText || btn.textContent;
  }
}
