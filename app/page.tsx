import Calculator from '@/components/Calculator'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Calculator</h1>
          <p className="text-gray-600">Simple, fast, and accurate calculations</p>
        </div>
        <Calculator />
      </div>
    </main>
  )
}