import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { REGEXP_ONLY_DIGITS } from "input-otp"

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export function VerifyForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

  const navigate = useNavigate()

  const [otp, setOtp] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [resendTimer, setResendTimer] = useState(30)
  const [canResend, setCanResend] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (otp.length < 6) {
      setIsOpen(true)   
    } else {
      navigate("/dashboard")
    }
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (!canResend && resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1)
      }, 1000)
    } else {
      setCanResend(true)
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [resendTimer, canResend])

  const handleResendCode = () => {
  // 👇 Simulasikan kirim ulang kode via backend/API
  console.log("Resending verification code...")
  setCanResend(false)
  setResendTimer(30)
}

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Verifying</CardTitle>
          <CardDescription>
            We already send a verification code to your email, please check your inbox!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <div className="flex flex-col gap-6">
              <div className="flex justify-center">
                <InputOTP value={otp} onChange={setOtp} maxLength={6} pattern={REGEXP_ONLY_DIGITS} >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSeparator />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSeparator />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                </div>
              <Button type="submit" className="w-full">
                Send
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={handleResendCode}
                disabled={!canResend}
                className="text-sm text-muted-foreground hover:underline"
              >
                {canResend ? "Resend Code" : `Resend in ${resendTimer}s`}
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
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Invalid OTP Code</AlertDialogTitle>
            <AlertDialogDescription>
              Please fill in all 6 digits before submitting.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
