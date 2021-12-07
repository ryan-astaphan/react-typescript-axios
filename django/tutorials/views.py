from tutorials.models import Tutorial
from tutorials.serializers import TutorialSerializer
from rest_framework import generics


class TutorialList(generics.ListCreateAPIView):
    queryset = Tutorial.objects.all()
    serializer_class = TutorialSerializer


class TutorialDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tutorial.objects.all()
    serializer_class = TutorialSerializer
