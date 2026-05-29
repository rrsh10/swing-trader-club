export const USERS = [
  { email: "roberto@canopia.cl", password: "trader2026", name: "Roberto Santander" },
  { email: "demo@swingtraderclub.cl", password: "demo2026", name: "Miembro Demo" },
];

export const SESSION_KEY = "stc_session";

export function login(email: string, password: string) {
  const user = USERS.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  return user ? { name: user.name, email: user.email } : null;
}

export function getSession() {
  if (typeof window === "undefined") return null;
  try { return JSON.parse(localStorage.getItem(SESSION_KEY) ?? "null"); } catch { return null; }
}

export function saveSession(user: { name: string; email: string }) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}
