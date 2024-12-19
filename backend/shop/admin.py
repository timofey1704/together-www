from django.contrib import admin
from . import models
from shop.models import Request

@admin.register(Request)
class RequestAdmin(admin.ModelAdmin):
    list_display = ('request_type', 'name', 'surname', 'email', 'phone_number')  # поля которые отображаем
    search_fields = ('name', 'surname', 'request_type')  # поля по которым ищем
    list_filter = ('request_type',)  # фильтр по полям
    
    actions = ['filter_by_request', 'filter_by_volunteer']  # кастомные действия для дропдауна

    def filter_by_request(self, request, queryset):
        """
        Фильтрация по request_type='request'.
        """
        filtered_queryset = Request.objects.filter(request_type='request')  # фильтруем записи нуждающихся
        self.message_user(request, f"Найдено {filtered_queryset.count()} записей с request_type='request'.")
        return None  # Возвращаем None, чтобы избежать ошибок

    def filter_by_volunteer(self, request, queryset):
        """
        Фильтрация по request_type='volunteer'.
        """
        filtered_queryset = Request.objects.filter(request_type='volunteer')  # фильтруем записи волонтеров
        self.message_user(request, f"Найдено {filtered_queryset.count()} записей с request_type='volunteer'.")
        return None  # none чтобы избежать ошибок

    filter_by_request.short_description = "Показать записи с 'request'"
    filter_by_volunteer.short_description = "Показать записи с 'volunteer'"