import { cn } from "@/lib/utils"
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

export function ForgotPassword({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

  const navigate = useNavigate()

  // Fungsi di bawah ini hanya bersifat sementara segera hapus jika sudah implementasi 
  // Auth yang proper!

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    if (form.checkValidity()) {
      // Form is valid, lanjut redirect
      navigate("/verify-code")
    } else {
      // Form invalid, tampilkan pesan default dari browser
      form.reportValidity()
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Forgot Password</CardTitle>
          <CardDescription>
            Enter your email below, we will send you a verification email!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
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
              <Button type="submit" className="w-full">
                Send
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already Remember?{" "}
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
