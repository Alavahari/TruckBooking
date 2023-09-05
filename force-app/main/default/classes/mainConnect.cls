public with sharing class mainConnect {
    // public mainConnect() {

    // }

    @AuraEnabled(cacheable=true)
    public static List<Car_Model__c> fetchCarModel(){
        List<Car_Model__c> li = [select Id, Name,Stage__c,Total_Price__c from Car_Model__c where Stage__c = 'Launched1'];
        return li;
    }

    @AuraEnabled(Cacheable = true)
    public static List<Contact> fetchContact()
    {
        return [Select Id,AccountId,Name,Phone,Email,Account.Name from Contact];
    }
}