public with sharing class truckBookings {
    @AuraEnabled(Cacheable=true)
    public static List<Truck_Booking__c> truckBookingsByCustomer(){
        return [SELECT Id,Account__r.Name,Name,Truck__r.Name,Booking_Date__c,Pick_List__c,Drop_Point__c,Booking_Status__c,Phone_Number__c FROM Truck_Booking__c LIMIT 15];
    }
}