
import time
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import httpx
import asyncio
from pydantic import BaseModel


app = FastAPI() 


origins = [
    'http://localhost:3000'
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

class Item(BaseModel):
    code: str





async def get_token(data):
    token_url = "http://localhost:2358/submissions"

    async with httpx.AsyncClient() as client:
        response = await client.post(token_url, data=data)

        if response.status_code // 100 == 2:
            token_data = response.json()

            return token_data
        else:
            print("Err in processing token")


async def get_answer(token):
    urla = f"http://localhost:2358/submissions/{token.get('token')}"
 
    async with httpx.AsyncClient() as client:
        
        print("Выполнение...")
        await asyncio.sleep(5)

        response1 = await client.get(urla)

        if response1.status_code // 100 == 2:
            full_answer = response1.json()
            return full_answer["stdout"]
        else:
            print("Err 404")
        
        
@app.post('/')
async def input(obj: Item):

    data = {
        "source_code": obj.code,
        "language_id": "71",
        "number_of_runs": None,
        "stdin": "Judge0",
        "expected_output": None,
        "cpu_time_limit": None,
        "cpu_extra_time": None,
        "wall_time_limit": None,
        "memory_limit": None,
        "stack_limit": None,
        "max_processes_and_or_threads": None,
        "enable_per_process_and_thread_time_limit": None,
        "enable_per_process_and_thread_memory_limit": None,
        "max_file_size": None,
        "enable_network": None,
}
    
    token = await get_token(data)

    result = await get_answer(token)
    print(result)

    my_dict = {"answer": result}

    return my_dict


