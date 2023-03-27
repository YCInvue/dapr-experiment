FROM python:3.7.1-alpine3.8
WORKDIR /app
COPY ./app2/app.py . 
RUN pip install requests
ENTRYPOINT ["python"]
CMD ["app.py"]