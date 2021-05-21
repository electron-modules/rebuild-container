platform=$(node -e "console.log(process.platform)")
if test $platform = "darwin" ; then
  `npm bin`/electron-rebuild --arch=arm64 -s -w @journeyapps/sqlcipher
fi
