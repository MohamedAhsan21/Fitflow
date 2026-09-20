# 🏋️ FitFlow Redesign

## 👨‍🎓 Student Information

- **Student ID:** IT23565326
- **Project:** FitFlow Redesign
- **Module:** Human Computer Interaction (HCI)

FitFlow is a redesigned cross-platform fitness application designed to provide users with a smarter and more personalized fitness experience.

The system combines workout planning, nutrition tracking, progress monitoring, AI-powered recommendations, and community features within a modern and scalable application architecture.

This project was developed as part of an HCI lab activity focusing on technology evaluation, system architecture, scalability, security, maintainability, and user experience.

---

## 📌 Project Overview

The goal of the FitFlow redesign is to create a modern fitness platform that can support Android, iOS, and web users while maintaining a consistent user experience.

The application is designed to help users:

- Receive AI-generated personalized workout plans
- Record and manage workouts
- Track fitness progress
- Record meals and nutrition information
- Manage user profiles
- Participate in fitness challenges
- Interact with the fitness community
- Receive real-time updates

---

## 🚀 Main Features

### 🤖 AI Workout Recommendations

FitFlow uses an AI service to generate personalized workout recommendations based on user preferences and fitness information.

### 🏃 Workout Tracking

Users can record completed workouts and maintain their workout history.

### 📊 Progress Monitoring

Users can monitor their fitness progress and visualize their performance over time.

### 🥗 Nutrition Tracking

Users can record meals and nutrition-related information.

### 👥 Community Features

Users can participate in community activities, share updates, and interact with other FitFlow users.

### ⚡ Real-Time Updates

WebSocket communication can be used to deliver live community and application updates.

### 🔐 Secure Authentication

User registration and authentication are handled using Supabase Auth with JWT-based authentication.

---

## 🛠️ Technology Stack

| Layer | Technology |
| --- | --- |
| Frontend | Flutter |
| Primary Backend | NestJS |
| AI / ML Service | FastAPI + Python |
| Database | PostgreSQL |
| Authentication | Supabase Auth |
| Cache | Redis |
| Real-Time Communication | NestJS WebSockets |

---

## 🏗️ System Architecture

FitFlow follows a service-oriented architecture.

```text
Users
  │
  ▼
Flutter Application
(Android / iOS / Web)
  │
  │ HTTPS / REST API
  ▼
Supabase Authentication
  │
  │ JWT
  ▼
NestJS Backend
  │
  ├──────────────► PostgreSQL Database
  │
  ├──────────────► Redis Cache
  │
  ├──────────────► WebSocket Real-Time Layer
  │
  └──────────────► FastAPI AI Service
                    │
                    ▼
          Personalized Workout
              Recommendations
```

### Personalized Workout Plan

```text
User
 → Flutter
 → NestJS
 → FastAPI AI Service
 → NestJS
 → PostgreSQL
 → Flutter
```

### Nutrition Tracking

```text
User
 → Flutter
 → NestJS
 → PostgreSQL
 → Flutter
```

### Community Interaction

```text
User
 → Flutter
 → NestJS
 → PostgreSQL
 → WebSocket
 → Other Users
```
