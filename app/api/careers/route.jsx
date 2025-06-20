import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/dbConnect';
import Careers from '../../../Modeles/career.model';



export const config = {
  api: {
    bodyParser: false,
  },
};

const MAX_FILE_SIZE = 2 * 1024 * 1024; 


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

    if (file.type !== 'application/pdf') {
      return NextResponse.json({ success: false, message: 'Only PDF files are allowed' }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ success: false, message: 'File size exceeds 2MB limit' }, { status: 400 });
    }

  
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64File = buffer.toString('base64');

    const savedCareer = await Careers.create({
      name,
      email,
      place,
      phone,
      currentCTC,
      expectedCTC,
      talk,
      resume: base64File,
      submittedAt: new Date(),
    });

    return NextResponse.json({ success: true, message: 'Submitted successfully', career: savedCareer }, { status: 200 });
  } catch (err) {
    console.error('POST Error:', err);
    return NextResponse.json({ success: false, message: 'Server Error', error: err.message }, { status: 500 });
  }
}

// GET /api/careers
export async function GET() {
  try {
    await dbConnect();
    const careers = await Careers.find();
    return NextResponse.json(careers, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

