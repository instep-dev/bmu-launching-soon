"use client";
import { createContext, useContext } from "react";

type Messages = Record<string, Record<string, string | string[]>>;

const TranslationsContext = createContext<Messages>({});

export function TranslationsProvider({
  messages,
  children,
}: {
  messages: Messages;
  children: React.ReactNode;
}) {
  return (
    <TranslationsContext.Provider value={messages}>
      {children}
    </TranslationsContext.Provider>
  );
}

export function useTranslations(namespace: string) {
  const messages = useContext(TranslationsContext);
  const ns = (messages[namespace] || {}) as Record<string, any>;
  return (key: string): any => ns[key] ?? key;
}
