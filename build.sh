# build desktop version
cd desktop
npm run build
mkdir -p ../release/desktop
mv dist/*.exe ../release/desktop/changkun-blog-desktop-windows.exe
mv dist/*.deb ../release/desktop/changkun-blog-desktop-linux.deb
mv dist/mac/*.dmg ../release/desktop/changkun-blog-desktop-macos.dmg
rm -rf dist
cd ..
