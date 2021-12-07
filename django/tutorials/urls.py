from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from tutorials import views

urlpatterns = [
    path('tutorials/', views.TutorialList.as_view()),
    path('tutorials/<int:pk>/', views.TutorialDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
