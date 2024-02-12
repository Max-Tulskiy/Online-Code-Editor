import uvicorn
import httpx
import asyncio
from typing import Any
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware


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
    variables: Any
    language_id: str


async def get_token(data):
    token_url = "http://localhost:2358/submissions"

    async with httpx.AsyncClient() as client:
        response = await client.post(token_url, data=data)

        if response.status_code // 100 == 2:
            token_data = response.json()
            return token_data
        else:
           return None


async def get_answer(token):

    getStdOut = f"http://localhost:2358/submissions/{token.get('token')}"
    
    async with httpx.AsyncClient() as client:
        print("Выполнение...")
        await asyncio.sleep(5)

        response1 = await client.get(getStdOut)
        print(response1)
        if response1.status_code // 100 == 2:
            full_answer = response1.json()
            return full_answer["stdout"]
        else:
            return None


@app.post('/')
async def input(obj: Item):

    if obj.language_id == '':
        return {"answer": "Choose language"}    
     
    data = {
        "source_code": obj.code,
        "language_id": obj.language_id,
        "number_of_runs": None,
        "stdin": obj.variables,
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
 
    if token:
        result = await get_answer(token)
    else:
        result = "Judge not availible"
    my_dict = {"answer": result}
   
    return my_dict


if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=8000)