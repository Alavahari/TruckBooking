public with sharing class car_model_controller {

        @AuraEnabled(cacheable=true)
     public static List<car_model__c> getCarModels(){
       return [
            SELECT 	Car_Name__c,Name,Colours__c,Total_price__c,Stage__c
            FROM Car_Model__c
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ]; 
    }
}