import { streamText, UIMessage, convertToModelMessages } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = await streamText({
      model: openai("gpt-4o-mini"),
      messages: convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
  } catch (error: any) {
    console.error("Error streaming chat completion: ", error);

    // Detect missing API key error
    const message = error?.message?.includes("API key")
      ? "OpenAI API key is missing. Please set OPENAI_API_KEY in your environment variables."
      : "Failed to stream chat completion.";

    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
