# build image
FROM python:3.8.5-slim-buster

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . /app/

EXPOSE 5000

CMD ["python3", "server.py"]