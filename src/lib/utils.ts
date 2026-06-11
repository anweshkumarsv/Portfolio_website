import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function downloadResume() {
  try {
    const response = await fetch("/Resume_Anwesh_Kumar_S_V.pdf");
    if (!response.ok) throw new Error("Failed to fetch resume");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Resume_Anwesh_Kumar_S_V.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Resume download failed, opening in new tab:", error);
    window.open("/Resume_Anwesh_Kumar_S_V.pdf", "_blank");
  }
}
