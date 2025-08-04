import { cn } from "~/lib/utils"

interface LogoProps {
  variant?: "dark" | "light"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Logo({ variant = "dark", size = "md", className }: LogoProps) {
  const logoUrl = variant === "dark" 
    ? "https://wiowklgoaeeotfwjaoyq.supabase.co/storage/v1/object/public/assets//xMailer.png"
    : "https://wiowklgoaeeotfwjaoyq.supabase.co/storage/v1/object/public/assets//xMailer_white.png"

  const sizeClasses = {
    sm: "h-6 w-auto",
    md: "h-8 w-auto", 
    lg: "h-12 w-auto"
  }

  return (
    <img
      src={logoUrl}
      alt="xMailer"
      className={cn(sizeClasses[size], className)}
    />
  )
}
