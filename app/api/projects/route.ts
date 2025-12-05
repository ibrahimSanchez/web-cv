import { NextResponse } from 'next/server';
import { projectsService } from '@/src/lib/services/projects.service';

export async function GET() {
  try {
    const projects = await projectsService.getAll();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch projects', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}