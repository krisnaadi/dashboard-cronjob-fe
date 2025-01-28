# Dashboard Cronjob Frontend

This project is the frontend for a dashboard system that interacts with cronjobs.

## Setup

To get started with the development setup:

1. Clone this repository:
   ```bash
   git clone https://github.com/krisnaadi/dashboard-cronjob-fe
   cd dashboard-cronjob-fe
  ```
2. Install dependencies:

  ```bash
  pnpm install
  ```

3. Copy .env
  ```bash
  cp .env.example .env
  ```
4. configure api url in .env file
5. Run the development server:
  ```bash
  pnpm run dev
  ```

To deploy using docker:
1. Clone this repository:
   ```bash
   git clone https://github.com/krisnaadi/dashboard-cronjob-fe
   cd dashboard-cronjob-fe
  ```
2. Copy .env
  ```bash
  cp .env.example .env
  ```
3. configure api url in .env file
4. build docker image
  ```bash
  docker compose build
  ```
4. run docker container
  ```bash
  docker compose up -d
  ```