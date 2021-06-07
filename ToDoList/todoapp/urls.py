from django.urls import path
from .views import CreateToDoApi, ListTodoView, DeleteToDoApi, UpdateToDoApi

app_name = 'todoapp'

urlpatterns = [
    path('create', CreateToDoApi.as_view(), name="createtodoapi"),
    path("list", ListTodoView.as_view(), name="listtodoapiview"),
    path("delete/<pk>", DeleteToDoApi.as_view(), name="deletetodoapi"),
    path("update/<pk>", UpdateToDoApi.as_view(), name="updatetodoapi")
]
