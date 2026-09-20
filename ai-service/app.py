from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="FitFlow AI Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    return {"status": "ok", "service": "fitflow-ai-service"}


@app.get("/plan")
def plan():
    return {
        "user": "demo-user",
        "goal": "fat loss",
        "workout_focus": ["strength", "conditioning", "mobility"],
        "recommendation": "Train 4 days per week with one recovery-oriented session.",
    }
