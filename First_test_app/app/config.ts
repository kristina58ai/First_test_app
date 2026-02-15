/**
 * Базовый URL приложения. Используется для метаданных, Open Graph и Mini App.
 * Задаётся через NEXT_PUBLIC_URL (например: first-test-app-tau.vercel.app или https://...).
 */
function getBaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_URL?.trim();
  if (!url) {
    return "http://localhost:3000";
  }
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url.replace(/\/$/, "");
  }
  return `https://${url}`.replace(/\/$/, "");
}

export const APP_BASE_URL = getBaseUrl();
