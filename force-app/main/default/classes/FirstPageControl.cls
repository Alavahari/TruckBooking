public with sharing class FirstPageControl {
    public FirstPageControl() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> fetchAccounts(){
        return [SELECT Id, Name, Industry, Rating FROM Account];
}
    @AuraEnabled
    public static List<Lead> fetchLeads(){
    return [SELECT Title, Name, Phone, Email FROM Lead];
}

}