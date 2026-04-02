import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    revalidatePath('/blog')
    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    return NextResponse.json({ revalidated: false, error: (err as Error).message }, { status: 500 })
  }
}
