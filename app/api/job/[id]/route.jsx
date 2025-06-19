import dbConnect from '../../../../lib/dbConnect'
import Posting from '../../../../Modeles/Job.model'

export async function GET(req, { params }) {
  try {
    await dbConnect();

    const { id } = params;

    if (!id) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Job ID is required",
        }),
        { status: 400 }
      );
    }

    const job = await Posting.findById(id);

    if (!job) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Job not found",
        }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: job,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching job by ID:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to fetch job by ID",
      }),
      { status: 500 }
    );
  }
}
