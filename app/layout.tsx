import getCurrentUser from "./actions/getCurrentUser"
import LoginModal from "./components/modals/LoginModal"
import RegisterModal from "./components/modals/RegisterModal"
import RentModal from "./components/modals/RentModal"
import Navbar from "./components/navbar/Navbar"
import "./globals.css"
import ToasterProvider from "./providers/ToasterProvider"

export const metadata = {
  title: "Airbnb",
  description: "Airbnb application",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <ToasterProvider />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        <div className='pb-20 pt-20 '>{children}</div>
      </body>
    </html>
  )
}
