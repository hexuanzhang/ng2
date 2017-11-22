# 使用 node 6.10.3 的精简版作为基础镜像
FROM node:6.10.3-slim

# 安装 Nginx
RUN apt-get update \    && apt-get install -y nginx

# 指定工作目录
WORKDIR /app

# 将当前目录下的所有文件拷贝至工作目录下
COPY . /app/

# 运行期服务器端口
EXPOSE 80

# 流程
RUN  npm install \
     && npm run start
     # && cp -r dist/* /var/www/html \
     # && rm -rf /app

# 启动 nginx
# CMD ["nginx","-g","daemon off;"]
