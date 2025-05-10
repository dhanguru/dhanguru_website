import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-green-50 to-blue-50 p-4 text-center">
      <div className="animate-fade-in-up max-w-3xl space-y-8">
        <div className="space-y-4">
          <div className="flex justify-center">
            <Image
              src="/images/logo.png"
              alt="DhanGuru Logo"
              width={300}
              height={80}
              priority
              className="h-auto w-auto max-w-full"
            />
          </div>
          <p className="text-xl font-medium text-green-700 sm:text-2xl">
            Your Personal AI Finance Assistant Coming Soon
          </p>
        </div>

        <div className="h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>

        <p className="text-blue-800 max-w-md mx-auto">
          {"We're working hard to bring you the ultimate financial guidance platform. Stay tuned for our launch."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="border-green-300 focus-visible:ring-green-500"
          />
          <Button className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
            Notify Me
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="pt-8">
          <p className="text-blue-700 flex items-center justify-center gap-2">
            <Mail className="h-4 w-4" />
            <span>support@dhanguru.co</span>
          </p>
          <p className="text-green-600 text-sm mt-2">© {new Date().getFullYear()} DhanGuru. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
