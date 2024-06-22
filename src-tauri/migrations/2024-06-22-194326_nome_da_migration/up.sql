-- Your SQL goes here
CREATE TABLE Client (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  birthday TEXT NOT NULL,
  created_at TEXT NOT NULL
);