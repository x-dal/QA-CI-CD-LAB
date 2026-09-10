


export async function GET() {
    return Response.json({
        status: "ok",
        message: "Health check passed",
        service: "qa-ci-lab",
        timestamp: new Date().toISOString(),
        servicetime: process.uptime(),
    })
}