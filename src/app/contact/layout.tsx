export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className="bg-amber-300 text-gray-800 h-dvh">{children}</section>
  }