public with sharing class truckList {
    @AuraEnabled(Cacheable=true)
    public static List<Truck__c> search(){
        return [SELECT Id,Name,Truck_Number__c,Image__c,Max_Load_c__c,Cost_K_M_in_INR__c FROM Truck__c LIMIT 10];
    }
}