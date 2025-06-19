import dbConnect from '../../../../lib/dbConnect';
import Posting from '../../../../Modeles/Job.model';


export async function GET(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;

    const job = await Posting.findById(id);

    if (!job) {
      return new Response(JSON.stringify({ success: false, message: "Job not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true, data: job }), { status: 200 });
  } catch (error) {
    console.error("Error fetching job by ID:", error);
    return new Response(JSON.stringify({ success: false, message: "Server error" }), { status: 500 });
  }
}

// PUT (Update)
export async function PUT(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    const body = await req.json();
    const { position, experience, description, location } = body;

    const updated = await Posting.findByIdAndUpdate(
      id,
      { position, experience, description, location },
      { new: true }
    );

    if (!updated) {
      return new Response(JSON.stringify({ success: false, message: "Job not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true, message: "Job updated", data: updated }), { status: 200 });
  } catch (error) {
    console.error("Error updating job:", error);
    return new Response(JSON.stringify({ success: false, message: "Server error" }), { status: 500 });
  }
}

// DELETE
export async function DELETE(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;

    const deleted = await Posting.findByIdAndDelete(id);

    if (!deleted) {
      return new Response(JSON.stringify({ success: false, message: "Job not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true, message: "Job deleted" }), { status: 200 });
  } catch (error) {
    console.error("Error deleting job:", error);
    return new Response(JSON.stringify({ success: false, message: "Server error" }), { status: 500 });
  }
}