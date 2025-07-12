

import dbConnect from '../../../lib/dbConnect';
import Contact from '../../../Modeles/contact.model'; 

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, termsAccepted } = body;

    if (!name || !email || !phone || !subject || !message || !termsAccepted) {
      return new Response(JSON.stringify({ message: 'All fields are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await dbConnect();

    const contact = new Contact({
      name,
      email,
      phone,
      subject,
      message,
      termsAccepted,
    });

    await contact.save();

    return new Response(JSON.stringify({ message: 'Message received and saved!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function GET() {
  try {
    await dbConnect();

    const contacts = await Contact.find().sort({ createdAt: -1 });

    return new Response(JSON.stringify(contacts), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('GET API Error:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}