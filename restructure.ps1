$ErrorActionPreference = "Stop"

$basePath = "C:\Users\rsaty\OneDrive\Desktop\PROJECT\career-advisor-master"
Set-Location $basePath

# Create frontend and backend directories
New-Item -ItemType Directory -Force -Path "frontend"
New-Item -ItemType Directory -Force -Path "backend"

# List of files and folders to move to frontend
$frontendItems = @(
    ".bolt",
    ".vscode",
    ".vs",
    "public",
    "src",
    ".gitignore",
    "eslint.config.js",
    "index.html",
    "package.json",
    "package-lock.json",
    "postcss.config.js",
    "tailwind.config.js",
    "vite.config.ts"
)

foreach ($item in $frontendItems) {
    if (Test-Path $item) {
        Move-Item -Path $item -Destination "frontend\" -Force
    }
}

# Delete old server and unnecessary TS configs
$itemsToDelete = @(
    "server",
    "tsconfig.app.json",
    "tsconfig.json",
    "tsconfig.node.json",
    "frontend\tsconfig.app.json",
    "frontend\tsconfig.json",
    "frontend\tsconfig.node.json",
    "frontend\vite-env.d.ts",
    "frontend\src\vite-env.d.ts"
)

foreach ($item in $itemsToDelete) {
    if (Test-Path $item) {
        Remove-Item -Path $item -Recurse -Force
    }
}

# Remove the types folder if it exists
if (Test-Path "frontend\src\types") {
    Remove-Item -Path "frontend\src\types" -Recurse -Force
}

# Recursively rename all .tsx files to .jsx
Get-ChildItem -Path "frontend\src" -Filter "*.tsx" -Recurse | Rename-Item -NewName { $_.Name -replace '\.tsx$','.jsx' }

# Recursively rename all .ts files to .js
Get-ChildItem -Path "frontend\src" -Filter "*.ts" -Recurse | Rename-Item -NewName { $_.Name -replace '\.ts$','.js' }

# Rename vite.config.ts to vite.config.js
if (Test-Path "frontend\vite.config.ts") {
    Rename-Item -Path "frontend\vite.config.ts" -NewName "vite.config.js" -Force
}

Write-Host "Restructuring complete."
