from fastapi import APIRouter

student_router = APIRouter(prefix="/student",tags=["student"])
#localhost:8000/student/addstudent
@student_router.post("/addStudent")
def addStudent():
    return "add student method called"
@student_router.get("/getStudent")
def getStudent():
    return "get student method called"
@student_router.put("/updateStudent")
def updateStudent():
    return "update student method called"
@student_router.delete("/deleteStudent")
def deleteStudent():
    return "delete student method called"