from rest_framework import generics, status
from .models import Todo
from .serializer import TodoSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
    
class ListTodoView(generics.ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class CreateToDoApi(APIView):
    serializer_class = TodoSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            task = serializer.data.get("task")
            todo = Todo(task=task)
            todo.save()

        return Response(TodoSerializer(todo).data, status=status.HTTP_201_CREATED)

class DeleteToDoApi(APIView):
    serializer_class = TodoSerializer

    def delete(self, request, pk, format=None):
        todo = Todo.objects.get(pk=pk)
        todo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class UpdateToDoApi(APIView):
    serializer_class = TodoSerializer

    def put(self, request, pk, format=None):
        todo = Todo.objects.get(pk=pk)
        serializer = self.serializer_class(todo, data=request.data)
        
        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
