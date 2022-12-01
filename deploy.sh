echo "Switching to branch master"
git checkout dev-htmlAndrea

echo "Building app"
npm run build

echo "Deploying files to server"
scp -r build/* development@20.56.172.94:/home/development/testing/websites

echo "Done"
