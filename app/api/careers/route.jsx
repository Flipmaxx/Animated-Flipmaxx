import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Careers from '@/Modeles/career.model';
import { writeFile } from 'fs/promises';
import path from 'path';
import { mkdir } from 'fs/promises';


export const config = {
  api: {
    bodyParser: false,
  },
};

// POST Handler
export async function POST(req) {
  try {
    await dbConnect();

    const formData = await req.formData();

    const name = formData.get('name');
    const email = formData.get('email');
    const place = formData.get('place');
    const phone = formData.get('phone');
    const currentCTC = formData.get('currentCTC');
    const expectedCTC = formData.get('expectedCTC');
    const talk = formData.get('talk');
    const file = formData.get('resume');

    if (!file || typeof file === 'string') {
      return NextResponse.json({ success: false, message: 'Resume file is required' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, file.name);
    await writeFile(filePath, buffer);

    const savedCareer = await Careers.create({
      name,
      email,
      place,
      phone,
      currentCTC,
      expectedCTC,
      resume: `/uploads/${file.name}`,
      talk,
      submittedAt: new Date(),
    });

    return NextResponse.json({ success: true, message: 'Submitted successfully', career: savedCareer }, { status: 200 });
  } catch (err) {
    console.error('POST Error:', err);
    return NextResponse.json({ success: false, message: 'Server Error', error: err.message }, { status: 500 });
  }
}

// GET Handler
export async function GET() {
  try {
    await dbConnect();
    const careers = await Careers.find();
    return NextResponse.json(careers, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
