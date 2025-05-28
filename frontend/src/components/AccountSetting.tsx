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
import { REGEXP_ONLY_CHARS } from "input-otp"

export function AccountSetting({
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
      navigate("/dashboard")
    } else {
      // Form invalid, tampilkan pesan default dari browser
      form.reportValidity()
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Account Setting</CardTitle>
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
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="Full-Name">Full Name</Label>
                </div>
                <Input 
                id="Full-Name" 
                type="name" 
                pattern={REGEXP_ONLY_CHARS} 
                placeholder="Asep Surasep" 
                required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="Favorite-Genre">Favorite Genre</Label>
                </div>
                <Input 
                id="Favorite-Genre" 
                type="genre" 
                pattern={REGEXP_ONLY_CHARS} 
                placeholder="Fantasy" 
                required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="Bio">Bio User</Label>
                </div>
                <Input 
                id="bio" 
                type="bio" 
                pattern={REGEXP_ONLY_CHARS} 
                placeholder="Love Books" 
                required />
              </div>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
