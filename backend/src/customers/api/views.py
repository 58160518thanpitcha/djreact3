from rest_framework.generics import ListAPIView, RetrieveAPIView
from customers.models import Customer
from .serializers import CustomerSerializer

class CustomerListView(ListAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class CustomerDetailView(RetrieveAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer