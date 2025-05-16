# Deploy script for Taco Clicker mobile version
Write-Host "Starting deployment of Taco Clicker mobile version..."

# Ensure we're on the mobile-only branch
git checkout mobile-only

# Remove desktop-only files from tracking
if (Test-Path "dist") {
    Remove-Item -Recurse -Force dist/
}
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force node_modules/
}

# Stage changes
git add .

# Commit changes
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Mobile deployment update - $timestamp"

# Push to GitHub Pages branch
git push origin mobile-only:gh-pages -f

Write-Host "Deployment complete!"
Write-Host "Your site will be available at: https://tacovr-12.github.io/taco-clicker-mobile/"
Write-Host "Note: It may take a few minutes for GitHub Pages to update." 