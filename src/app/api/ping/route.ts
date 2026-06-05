import { NextResponse } from "next/server";

export async function GET() {
  const endpoint = process.env.GAS_ENDPOINT;
  return NextResponse.json({
    gas_endpoint_set: !!endpoint,
    gas_endpoint_preview: endpoint ? endpoint.slice(0, 40) + "..." : "NOT SET",
    node_env: process.env.NODE_ENV,
  });
}
