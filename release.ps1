# Release script for desktop version
Write-Host "🎮 Preparing desktop release..."

# Copy sensitive files from secure location (you'll need to specify this)
$secureFilesPath = "../taco-backup"  # Change this to your secure files location
Write-Host "📁 Copying game files from secure location..."

Copy-Item "$secureFilesPath/game.js" .
Copy-Item "$secureFilesPath/leaderboard.js" .
Copy-Item "$secureFilesPath/firebase-config.js" .

# Install dependencies
Write-Host "📦 Installing dependencies..."
npm install

# Build the application
Write-Host "🛠️ Building application..."
npm run build

# Create GitHub release
Write-Host "🚀 Publishing release..."
npm run publish

# Clean up sensitive files
Write-Host "🧹 Cleaning up sensitive files..."
Remove-Item game.js
Remove-Item leaderboard.js
Remove-Item firebase-config.js

Write-Host "✅ Desktop release completed!" 