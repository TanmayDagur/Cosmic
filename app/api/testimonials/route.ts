import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json([
  {
    "name": "Sophia Lee",
    "feedback": "The session was life-changing! I got so much clarity about my career path.",
    "imageUrl": "/images/client1.jpg"
  },
  {
    "name": "David Kim",
    "feedback": "Accurate predictions and very professional. Highly recommended.",
    "imageUrl": "/images/client2.jpg"
  },
  {
    "name": "Emma Watson",
    "feedback": "I feel more confident about my future now. Amazing experience!",
    "imageUrl": "/images/client3.jpg"
  }
]
)
}
