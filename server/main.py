from fastapi import FastAPI

app = FastAPI() 


@app.get('/')
def root():
    return http://localhost:3000/