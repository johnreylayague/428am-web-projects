const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const DATA_FILE = path.join(__dirname, "todos.txt");

// Initialize data file if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

// Helper: Read todos from file
function readTodos() {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Helper: Write todos to file
function writeTodos(todos) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 2));
}

// Create server
const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  // Parse URL
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = url.pathname;

  // GET all todos
  if (req.method === "GET" && pathname === "/api/todos") {
    const todos = readTodos();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(todos));
    return;
  }

  // POST new todo
  if (req.method === "POST" && pathname === "/api/todos") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const newTodo = JSON.parse(body);
        const todos = readTodos();
        todos.push(newTodo);
        writeTodos(todos);

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(newTodo));
      } catch (error) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
    return;
  }

  // PUT update todo
  if (req.method === "PUT" && pathname.startsWith("/api/todos/")) {
    const id = parseInt(pathname.split("/").pop());
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const updatedTodo = JSON.parse(body);
        let todos = readTodos();
        const index = todos.findIndex((t) => t.id === id);

        if (index !== -1) {
          todos[index] = { ...todos[index], ...updatedTodo };
          writeTodos(todos);

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(todos[index]));
        } else {
          res.writeHead(404, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Todo not found" }));
        }
      } catch (error) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
    return;
  }

  // DELETE todo
  if (req.method === "DELETE" && pathname.startsWith("/api/todos/")) {
    const id = parseInt(pathname.split("/").pop());
    let todos = readTodos();
    const filteredTodos = todos.filter((t) => t.id !== id);

    if (filteredTodos.length !== todos.length) {
      writeTodos(filteredTodos);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Todo deleted" }));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Todo not found" }));
    }
    return;
  }

  // 404 Not Found
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📝 Data stored in: ${DATA_FILE}`);
  console.log(`\nAPI Endpoints:`);
  console.log(`  GET    /api/todos       - Get all todos`);
  console.log(`  POST   /api/todos       - Create new todo`);
  console.log(`  PUT    /api/todos/:id   - Update todo`);
  console.log(`  DELETE /api/todos/:id   - Delete todo`);
});
