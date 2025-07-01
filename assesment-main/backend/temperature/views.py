
import random
import logging
from django.utils import timezone
from rest_framework.response import Response
from rest_framework.decorators import api_view, throttle_classes
from rest_framework import status
from .throttling import CustomThrottle

logger = logging.getLogger('api')  # use the custom logger

@api_view(['GET'])
@throttle_classes([CustomThrottle])
def get_temperature(request):
    try:
        temperature = round(random.uniform(15, 45), 2)
        user_ip = request.META.get('REMOTE_ADDR', 'unknown')

        logger.info(f"Temperature API called — IP: {user_ip}, Temp: {temperature}°C, Time: {timezone.now().isoformat()}")

        return Response({
            'temperature': temperature,
            'unit': 'Celsius',
            'timestamp': timezone.now().isoformat()
        }, status=status.HTTP_200_OK)

    except Exception as e:
        logger.error(f"Temperature API ERROR: {str(e)}")
        return Response({'error': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
