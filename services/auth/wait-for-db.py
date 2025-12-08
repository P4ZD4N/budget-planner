#!/usr/bin/env python3
import os
import sys
import time
import socket

host = os.environ.get("DB_HOST", "db-auth")
port = int(os.environ.get("DB_PORT", 5432))

print(f"Waiting for database {host}:{port}...")

while True:
    try:
        with socket.create_connection((host, port), timeout=1):
            break
    except OSError:
        time.sleep(1)

print("Database is up - executing command")
os.execvp(sys.argv[1], sys.argv[1:])

