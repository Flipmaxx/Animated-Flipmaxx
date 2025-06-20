import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import Careers from '../../../../Modeles/career.model';
import nodemailer from 'nodemailer'
export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    await dbConnect();

 
    const career = await Careers.findById(id);
    if (!career) {
      return NextResponse.json({ success: false, message: 'Career not found' }, { status: 404 });
    }


    await Careers.findByIdAndDelete(id);

    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: career.email,
      subject: 'Application Update - Flipmaxx Global LLP',
      html: `
        <p>Dear ${career.name},</p>
        <p>Thank you for applying to Flipmaxx Global LLP. We appreciate your interest, but after careful consideration, we regret to inform you that we won't be moving forward with your application at this time.</p>
        <p>We wish you all the best in your career journey!</p>
        <p>Sincerely,<br />Flipmaxx HR Team</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Application rejected and email sent' }, { status: 200 });

  } catch (error) {
    console.error('DELETE + Mail Error:', error);
    return NextResponse.json({ success: false, message: 'Server Error', error: error.message }, { status: 500 });
  }
}