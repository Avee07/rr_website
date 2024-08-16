FROM node:18 AS build
# Install Husky globally
# RUN npm install -g husky

# RUN apt update && apt upgrade -y

# RUN wget https://fastdl.mongodb.org/tools/db/mongodb-database-tools-ubuntu2004-x86_64-100.9.1.deb && \
#     apt install ./mongodb-database-tools-*.deb && \
#     rm -f mongodb-database-tools-*.deb

# ENV NODE_ENV=production
ENV PORT=80
# ENV TZ=Asia/Kolkata
# ENV DB_URI=mongodb://192.168.13.82/rrispat
# ENV AUTH_DB=mongodb://192.168.13.82/auth
# ENV LOGISTICS_DB=mongodb://192.168.13.82/logistics
# ENV HR_DB=mongodb://192.168.13.82/hr
# ENV COMPLAINT_DB=mongodb://192.168.13.82/complaint
# ENV GI_DB=mongodb://192.168.13.82/gi
# ENV SALES_DB=mongodb://192.168.13.82/sales
# ENV PIPEMILLPRODUCTION_DB=mongodb://192.168.13.82/pmproduction
# ENV TLT_DB=mongodb://192.168.13.82/tlt
# ENV STORE_DB=mongodb://192.168.13.82/store
# ENV JWT_SECRET=Consoul@123
# ENV JWT_EXPIRES=1y
# ENV PROXY_ENABLED=false     


WORKDIR /app
COPY package.json /app/
# RUN npm install -g @nestjs/cli
RUN npm install

# Skip Husky hooks installation during Docker build
# ENV HUSKY_SKIP_INSTALL=true

COPY . /app/
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html 

EXPOSE ${PORT}

CMD ["nginx", "-g","daemon off;"]


# docker build  --no-cache -t rr_website_image .      
# docker run -d --name rr_website -p 80:80 rr_website_image

# docker tag rr_website_image 192.168.13.72:5000/rr_website
# docker push 192.168.13.72:5000/rr_website
# docker pull 192.168.13.72:5000/rr_website
# docker run -d --name rr_website -p 80:80 192.168.13.72:5000/rr_website


# docker pull 192.168.13.72:5000/rrcomplaint_frontend
# docker run -d --name rrcomplaint_frontend -p 8003:80 192.168.13.72:5000/rrcomplaint_frontend