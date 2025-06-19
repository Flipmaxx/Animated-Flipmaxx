import dbConnect from '../../../lib/dbConnect'
import Posting from '../../../Modeles/Job.model'

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { position, experience, description, location } = body;

    if (!position || !experience || !description || !location) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "All fields are required",
        }),
        { status: 400 }
      );
    }
    const newPosting = await Posting.create({
      position,
      experience,
      description,
      location,
      submittedAt: new Date(),
    });
    return new Response(
      JSON.stringify({
        success: true,
        message: "Job posting created successfully",
        data: newPosting,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating job posting:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Server error. Please try again later.",
      }),
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();

    const postings = await Posting.find().sort({ submittedAt: -1 }); 

    return new Response(
      JSON.stringify({
        success: true,
        data: postings,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching job postings:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to fetch job postings",
      }),
      { status: 500 }
    );
  }
}