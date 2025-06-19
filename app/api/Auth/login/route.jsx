
import dbConnect from '../../../../lib/dbConnect';
import Auth from '../../../../Modeles/auth.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie'
import { cookies } from 'next/headers';
export const dynamic = 'force-dynamic';
const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return new Response(JSON.stringify({ message: 'Email and password required' }), { status: 400 });
    }

    const user = await Auth.findOne({ email });
    if (!user) {
      return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        EmployeeName: user.EmployeeName,
        EmployeeID: user.EmployeeID,
      },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Set token as HTTP-only cookie
    const cookie = serialize('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    });

    const res = new Response(JSON.stringify({
      message: 'Login successful',
      user: {
        email: user.email,
        EmployeeName: user.EmployeeName,
        EmployeeID: user.EmployeeID,
      },
    }), { status: 200 });

    res.headers.set('Set-Cookie', cookie);
    return res;

  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Login error', error: error.message }),
      { status: 500 }
    );
  }
}

export async function GET() {
  const cookieStore = cookies();

  const token = cookieStore.get('token')?.value;

  if (!token) {
    return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return new Response(
      JSON.stringify({ message: 'Token verified', user: decoded }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ message: 'Invalid or expired token' }), { status: 403 });
  }
}


export async function DELETE() {
  const expiredCookie = serialize('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 0,
  });

  const res = new Response(JSON.stringify({ message: 'Logged out successfully' }), {
    status: 200,
  });

  res.headers.set('Set-Cookie', expiredCookie);
  return res;
}