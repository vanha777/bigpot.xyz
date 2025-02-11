import ThankYouComponent from '@/components/ThankYou'
import { Suspense } from 'react'

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouComponent />
    </Suspense>
  )
}
