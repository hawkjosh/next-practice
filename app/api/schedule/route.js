import schedule from '@/data/schedule.json'
import { NextResponse } from 'next/server'

export async function GET() {
	return NextResponse.json({ schedule: schedule.data })
}
