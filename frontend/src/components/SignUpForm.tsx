import { cn } from "@/lib/utils"
import React from "react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

  const navigate = useNavigate()
  const passwordRef = React.useRef<HTMLInputElement>(null)
  const confirmPasswordRef = React.useRef<HTMLInputElement>(null)

  const validateConfirmPassword = () => {
    const password = passwordRef.current?.value
    const confirmPassword = confirmPasswordRef.current?.value

    if (confirmPasswordRef.current) {
      if (password !== confirmPassword) {
        confirmPasswordRef.current.setCustomValidity("Passwords do not match")
      } else {
        confirmPasswordRef.current.setCustomValidity("")
      }
    }
  }


  // Fungsi di bawah ini hanya bersifat sementara segera hapus jika sudah implementasi 
  // Auth yang proper!

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    if (form.checkValidity()) {
      // Form is valid, lanjut redirect
      navigate("/dashboard")
    } else {
      // Form invalid, tampilkan pesan default dari browser
      form.reportValidity()
    }
  }

  const handleLoginGoogleTemporary = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    navigate ("/dashboard")
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information below to register your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="FullName">Full Name</Label>
                <Input
                  id="FullName"
                  type="FullName"
                  placeholder="Asep Surasep"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  pattern=".+@gmail\.com"
                  title="Please use valid gmail! Ex: Asep@gmail.com"
                  placeholder="Asep@gmail.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input 
                id="password" 
                type="password"
                ref={passwordRef} 
                minLength={8}
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$"
                title="Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"
                onInput={validateConfirmPassword}
                required 
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="confirm-password">Confirm</Label>
                </div>
                <Input 
                id="confirm-password" 
                type="password" 
                ref={confirmPasswordRef}
                required 
                onInput={validateConfirmPassword}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full" onClick={handleLoginGoogleTemporary}>
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <a href="/login" className="underline underline-offset-4">
                Login
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
