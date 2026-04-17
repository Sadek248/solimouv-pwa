"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "solimouv_session=false; path=/; max-age=0";
    router.push("/");
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-black/10 bg-white px-4 text-sm font-semibold text-[#5C2C4F] transition hover:bg-[#F1EFED]"
    >
      Déconnexion
    </button>
  );
}