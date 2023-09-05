public with sharing class bookCar {
    @AuraEnabled
    public static void dobookCar(String search,String AccId) {
        
        Contact a=[Select Id,AccountId, Email,Account.ShippingCountry from Contact where AccountId =:AccId];
        Car_Booking__c cb = new Car_Booking__c();
        cb.Car_Model__c=search;
        cb.Account__c=AccId;
        cb.Email__c=a.Email;
        cb.Shipping_Location__c=a.Account.ShippingCountry;
        cb.Status__c ='Booking Received'; 
        insert cb;
    }
}