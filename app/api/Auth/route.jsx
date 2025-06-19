
import dbConnect from '../../../lib/dbConnect';
import Auth from '../../../Modeles/auth.model';
import bcrypt from 'bcrypt';

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const { EmployeeName, EmployeeID, email, password } = body;

    if (!EmployeeName || !EmployeeID || !email || !password) {
      return new Response(JSON.stringify({ message: 'All fields are required' }), { status: 400 });
    }

    const existingUser = await Auth.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: 'Email already exists' }), { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Auth.create({
      EmployeeName,
      EmployeeID,
      email,
      password: hashedPassword,
    });

    return new Response(JSON.stringify({ message: 'Signup successful', user: { email: newUser.email } }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Internal Server Error', error: error.message }), {
      status: 500,
    });
  }
}