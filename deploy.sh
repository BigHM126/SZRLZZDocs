#VuePress以本地依赖的形式被安装到项目并且部署在GitHub Pages上
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy docs'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:BigHM126/szrlzzdocs.git master:gh-pages

cd -


2c8ffac03ddce594ee526c0e1d822eb9e725deb8
curl -H "Authorization: token **2c8ffac03ddce594ee526c0e1d822eb9e725deb8**" https://api.travis-ci.org/v3/repo/travis-ci%2ftravis-build/key_pair/generated
