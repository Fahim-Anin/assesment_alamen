


from rest_framework.throttling import SimpleRateThrottle

class CustomThrottle(SimpleRateThrottle):
    scope = 'custom'
    rate = '100/second'

    def get_cache_key(self, request, view):
        ip_addr = request.META.get('REMOTE_ADDR')
        if ip_addr is None:
            return None
        return self.cache_format % {
            'scope': self.scope,
            'ident': ip_addr
        }