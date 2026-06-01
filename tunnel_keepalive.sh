#!/bin/bash
# 天赋罗盘 — Serveo 隧道自动重连脚本
# 同时维护两条隧道：直接 vite 和 IPFS 网关

TUNNEL1_PID=""
TUNNEL2_PID=""

cleanup() {
  kill $TUNNEL1_PID $TUNNEL2_PID 2>/dev/null
  exit 0
}
trap cleanup EXIT INT TERM

while true; do
  echo "$(date '+%Y-%m-%d %H:%M:%S'): Starting tunnels..."
  
  # Tunnel 1: Vite preview (port 4173)
  ssh -o StrictHostKeyChecking=no -o ServerAliveInterval=30 -o ExitOnForwardFailure=yes \
    -R 80:localhost:4173 serveo.net 2>&1 | while IFS= read -r line; do
    echo "[VITE] $line"
    if echo "$line" | grep -q "Forwarding HTTP traffic from"; then
      URL=$(echo "$line" | sed 's/.*from //')
      echo "[VITE] URL: $URL"
    fi
  done &
  TUNNEL1_PID=$!
  
  # Tunnel 2: IPFS gateway (port 8080)
  ssh -o StrictHostKeyChecking=no -o ServerAliveInterval=30 -o ExitOnForwardFailure=yes \
    -R 80:localhost:8080 serveo.net 2>&1 | while IFS= read -r line; do
    echo "[IPFS] $line"
    if echo "$line" | grep -q "Forwarding HTTP traffic from"; then
      URL=$(echo "$line" | sed 's/.*from //')
      echo "[IPFS] URL: $URL"
    fi
  done &
  TUNNEL2_PID=$!
  
  wait $TUNNEL1_PID $TUNNEL2_PID
  echo "$(date): Tunnels died, reconnecting in 5s..."
  sleep 5
done
