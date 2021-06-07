from django.db import models

class Todo(models.Model):
    task = models.TextField()

    def __str__(self):
        return self.task
