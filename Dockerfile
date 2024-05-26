from node
RUN mkdir /home/app
COPY . /home/app
RUN cd /home/app
RUN ["cmd", "npm start"]