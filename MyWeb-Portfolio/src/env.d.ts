/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_TEMPLATE_ID: string
  readonly VITE_EMAILJS_PUBLIC_KEY: string
  readonly VITE_MY_EMAIL: string
  readonly VITE_GITHUB_URL: string
  readonly VITE_LINKEDIN_URL: string
  readonly VITE_PORTFOLIO_TITLE: string
  readonly VITE_PORTFOLIO_DESCRIPTION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}