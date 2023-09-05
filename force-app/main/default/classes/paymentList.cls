public with sharing class paymentList {
    @AuraEnabled(Cacheable=true)
    public static List<Payment__c> paymentList(){ 
        return [SELECT id,Truck_Booking__r.Name,Payment_Date__c,Payment_Mode__c,Total_Amount__c FROM Payment__c LIMIT 10];
    }
}