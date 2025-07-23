// src/app/login/page.tsx
"use client";

import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Usuário logado:", result.user);
      router.push("/dashboard"); // Redireciona para o painel
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded shadow-md text-center space-y-4">
        <h1 className="text-2xl font-bold">Bem-vindo à Mentora</h1>
        <button
          onClick={handleGoogleLogin}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Entrar com Google
        </button>
      </div>
    </div>
  );
}
