public with sharing class apexclass1 {
    public apexclass1() {
    }
        @AuraEnabled(cacheable=true)
        public static List<Account> fetchAccounts(){
            return [SELECT Id, Name, Industry, Rating FROM Account];
        
    }
}