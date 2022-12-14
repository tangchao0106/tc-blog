#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m '关于输入框非空的判断'


# git push -f git@github.com:tangchao0106.github.io.git master

git push -f git@github.com:tangchao0106/tc-blog.git master:gh-pages

cd -
